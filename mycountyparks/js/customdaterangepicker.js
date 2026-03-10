
var minstay = window.minstay;
var maxstay = window.maxstay;
var DaysBeforeReservation = window.DaysBeforeReservation;
var FacilityType = window.facilityType;

let selectedDates = [];
const maxSelectableDates = maxstay;
const minStayRequired = minstay
let unavailableDates = [];
let notAvailablePriceDates = [];
let groupDates = [];
let pastDates = [];
let groupDateList = [];
const litDaysBeforeReservation = DaysBeforeReservation
const facilityType = FacilityType;
let inputDateRanges = {};
let autoSelectedDates = {};
let lastCreatedInputId = '';
let validationOccurred = false;
let flagExcludeSundayCheckIn;
$(document).ready(function () {

    moment.suppressDeprecationWarnings = true;
    function setMinSelectableDate() {

        // Get today's date
        const today = new Date();

        // Calculate minimum selectable date
        const minSelectableDate = new Date(today.getTime());

        // Add litDaysBeforeReservation to today's date
        minSelectableDate.setTime(today.getTime() + (litDaysBeforeReservation * 24 * 60 * 60 * 1000));

        return minSelectableDate;
    }

    // Initialize date pickers
    function initializeDatePickers() {

        const minSelectableDate = setMinSelectableDate();
        const maxSelectedDateyear = moment.utc(disableFutureDates(facilityType));
        const maxYear = maxSelectedDateyear.year();
        const dropsOption = window.innerWidth < 992 ? 'up' : 'down';

        $('input[name="daterange"]').daterangepicker({
            opens: 'right',
            drops: dropsOption,
            buttonClasses: "btn-simple",
            applyButtonClasses: "btn-theme",
            autoApply: true,
            width: '100px',
            isCustomDate: function (date) {
                const formattedDate = date.format('MM/DD/YYYY');

                const disabledClass = isDateDisabled(date);

                if (disabledClass) {
                    return disabledClass;
                }

                // Disable dates if max selectable dates reached
                if (selectedDates.length >= maxSelectableDates && !selectedDates.includes(formattedDate)) {
                    return 'disabled';
                }

                if (selectedDates.includes(formattedDate)) {
                    return 'disabled';
                }

                let classes = [];

                if (unavailableDates.some(item => item && item.date === formattedDate)) {
                    classes.push('nonselectabledates');
                }

                if (notAvailablePriceDates.includes(formattedDate)) {
                    classes.push('price-date');
                }

                if (groupDates.includes(formattedDate)) {
                    classes.push('group-date');
                }

                if (pastDates.includes(formattedDate)) {
                    classes.push('past-date');
                }

                if (selectedDates.includes(formattedDate)) {
                    classes.push('selected-date');
                }

                return classes.length > 0 ? classes.join(' ') : false;
            },
            locale: {
                format: 'MM/DD/YYYY',
                cancelLabel: 'Clear'
            },
            autoUpdateInput: false,
            showCustomRangeLabel: false,
            showDropdowns: true,
            maxYear: maxYear,
            minDate: minSelectableDate,
            maxDate: maxSelectedDateyear
        }, function (start, end) {
            // Callback for date range selection
            const $input = $(this);
            handleMinMaxDateRangeSelection(start, end, $input);

            const newSelectedDates = [];
            let current = start.clone();

            while (current.isSameOrBefore(end)) {
                newSelectedDates.push(current.format('MM/DD/YYYY'));
                current.add(1, 'days');
            }

            $input.data('selectedDates', newSelectedDates);
        }).attr('readonly', 'readonly');
        $('input[name="daterange"]').on('show.daterangepicker', function (ev, picker) {
            if (!$('#daterange-container .color-heading').length) {
                $('#daterange-container .daterangepicker').prepend(`
                <div class="color-heading cal-legend">
                              <ul>
                                  <li class="cal-legend-reserved">Reserved</li>
                                  <li class="cal-legend-together">Must be purchased together</li>
                                  <li class="cal-legend-selection">Your selection</li>
                              </ul>
                </div>
            `);
            }
        });

        $('input[name="daterange"]').each(function () {
            const $input = $(this);
            const inputId = $input.attr('id');

            $input.data('initialized', false);


            const parentEl = inputId === 'daterange001'
                ? '#append_datepicker_section'
                : (inputId.startsWith('daterange')
                    ? `#dateRangeDiv${inputId.replace('daterange', '')}`
                    : (window.innerWidth >= 992 ? "#sidebar-affix" : ".search.grid.sidebar-search.bottom-affix"));

            $input.daterangepicker({
                opens: 'right',
                drops: dropsOption,
                buttonClasses: "btn-simple",
                applyButtonClasses: "btn-theme",
                autoApply: true,
                width: '100px',
                parentEl: parentEl,
                isCustomDate: function (date) {
                    const todayFormatted = moment.utc().format('MM/DD/YYYY');
                    const startDateFormatted = $('input[name="daterange"]').data('startDate');

                    const formattedDate = date.format('MM/DD/YYYY');

                    const disabledClass = isDateDisabled(date);

                    if (disabledClass) {
                        return disabledClass;
                    }


                    if (selectedDates.length >= maxSelectableDates && !selectedDates.includes(formattedDate)) {
                        return 'disabled';
                    }
                    let classes = [];
                    if (unavailableDates.some(item => item && item.date === formattedDate)) {
                        classes.push('nonselectabledates');
                    }

                    if (formattedDate === todayFormatted || formattedDate === startDateFormatted) {
                        classes.push('no-hover');
                    }

                    if (selectedDates.includes(formattedDate)) {
                        classes.push('selected-date');
                        classes.push('disabled');
                    }

                    if (notAvailablePriceDates.includes(formattedDate)) {
                        classes.push('price-date');
                    }
                    groupDateList.forEach((range, index) => {
                        const start = moment.utc(range.fromDate).format('MM/DD/YYYY'); 
                        const end = moment.utc(range.toDate).format('MM/DD/YYYY'); 

                        if (date.isSameOrAfter(start) && date.isSameOrBefore(end)) {
                            classes.push(index % 2 === 0 ? 'group-date-1' : 'group-date-2');
                        }
                    });
                    if (pastDates.includes(formattedDate)) {
                        classes.push('past-date');
                    }
                    if (selectedDates.includes(formattedDate)) {
                        classes.push('selected-date');
                    }
                    return classes.length > 0 ? classes.join(' ') : false;
                },
                isInvalidDate: function (date) {
                    const formattedDate = date.format('MM/DD/YYYY');

                    if (unavailableDates.some(item => item && item.date === formattedDate)) {
                        return true;
                    }

                    if (selectedDates.includes(formattedDate)) {
                        return true;
                    }

                    return false;
                },
                locale: {
                    format: 'MM/DD/YYYY',
                    cancelLabel: 'Clear'
                },
                autoUpdateInput: false,
                showCustomRangeLabel: false,
                showDropdowns: true,
                maxYear: maxYear,
                minDate: minSelectableDate,
                maxDate: maxSelectedDateyear
            });

            $('input[name="daterange"]').on('show.daterangepicker', function (ev, picker) {

                const minDateDay = minSelectableDate.getDate();
                const minDateFormatted = minDateDay.toString();

                const minDateElement = picker.container.find(`td.price-date.active:contains(${minDateFormatted}), td.weekend.active:contains(${minDateFormatted}),td.off.disabled.active.start-date.nonselectabledates:contains(${minDateFormatted})`);

                if (minDateElement.length) {
                    minDateElement.removeClass('active');
                } else {

                }

                picker.container.addClass('custom-picker');

                if (!picker.container.find('.color-heading').length) {
                    picker.container.prepend(`
                <div class="color-heading cal-legend">
                              <ul>
                                  <li class="cal-legend-reserved">Reserved</li>
                                  <li class="cal-legend-together">Must be purchased together</li>
                                  <li class="cal-legend-selection">Your selection</li>
                              </ul>
                </div>
                <div class="validation-heading">
                    <ul>
                        <li class="invalid-dates">
                            <i class="fa-solid fa-circle-exclamation"></i> 
                            <span class="validation-message"></span>
                        </li>
                    </ul>
                </div>
            `);

                }
            });
        }).attr('readonly', 'readonly');

        $('input[name="daterange"]').on('change.daterangepicker', function (ev, picker) {
            const $input = $(this);
            handleMinMaxDateRangeSelection(picker.startDate, picker.endDate, $input);
        });

        // When the cancel event is triggered, clear the input fields and update selectedDates
        $('input[name="daterange"]').on('cancel.daterangepicker', function (ev, picker) {
            const $input = $(this);
            const inputId = $input.attr('id');

            const hdnStartDateCorresponding = $('#hdnInputStartDateCorresponding').val();
            const hdnEndDateCorresponding = $('#hdnInputEndDateCorresponding').val();
            hdnInputStartDate = $('#hdnInputStartDate').val();
            hdnInputEndDate = $('#hdnInputEndDate').val();
            // Clear the current input field
            $input.val('');

            // Determine the corresponding input ID by checking the prefix and replacing it
            let correspondingInputId;
            if (inputId === 'daterange001') {
                correspondingInputId = 'calendarInput';
            } else if (inputId === 'calendarInput') {
                correspondingInputId = 'daterange001';
            } else if (inputId.startsWith('daterange')) {
                correspondingInputId = inputId.replace('daterange', 'calendarInput');
            } else if (inputId.startsWith('calendarInput')) {
                correspondingInputId = inputId.replace('calendarInput', 'daterange');
            }

            const $correspondingInput = $(`#${correspondingInputId}`);

            // Clear the corresponding input field
            if ($correspondingInput.length) {
                $correspondingInput.val('');
                if (autoSelectedDates[correspondingInputId]) {
                    autoSelectedDates[correspondingInputId].forEach(date => {
                        selectedDates = selectedDates.filter(d => d !== date);
                    });
                    delete autoSelectedDates[correspondingInputId];
                }
            }

            const dateRange = inputDateRanges[inputId];
            if (dateRange) {
                const { startDate, endDate } = dateRange;

                // Filter out the dates within the range from selectedDates
                selectedDates = selectedDates.filter(function (date) {
                    var dateObj = moment(date, 'MM/DD/YYYY');
                    return !(dateObj.isSameOrAfter(startDate, 'MM/DD/YYYY') && dateObj.isSameOrBefore(endDate, 'MM/DD/YYYY'));
                });

                // Remove the date range from the mapping object
                delete inputDateRanges[inputId];
                if (autoSelectedDates[inputId]) {
                    autoSelectedDates[inputId].forEach(date => {
                        selectedDates = selectedDates.filter(d => d !== date);
                    });
                    delete autoSelectedDates[inputId];
                }
            } else if (hdnStartDateCorresponding || hdnEndDateCorresponding || hdnInputStartDate || hdnInputEndDate) {
                const startingDate = $('#hdnInputStartDateCorresponding').val();
                const endingDate = $('#hdnInputEndDateCorresponding').val();

                // Filter out dates previously selected by this input
                selectedDates = selectedDates.filter(date => {
                    return date < startingDate || date > endingDate;
                });

                // Clear the date range stored for this input
                delete inputDateRanges[inputId];
            }
            else {

            }
            $('#append_datepicker_section').removeClass('margin-bottom-60');

            initializeDatePickers();
        });


        $('input[name="daterange"]').on('apply.daterangepicker', function (ev, picker) {
            const startDate = picker.startDate.format('MM/DD/YYYY');
            const endDate = picker.endDate.format('MM/DD/YYYY');
            const startingdate = picker.startDate;
            const endingdate = picker.endDate;
            const $input = $(this);
            const inputId = $input.attr('id');

            clearSelectedDatesForInput(inputId);
            $('.invalid-dates').removeClass('active').hide();
            const isInvalidRange = unavailableDates.some(function (dateObj) {
                const dateText = dateObj.date; 
                const cellDate = moment.utc(dateText, 'MM/DD/YYYY', true);
                const formattedStartDate = moment.utc(startDate, 'MM/DD/YYYY', true);
                const formattedEndDate = moment.utc(endDate, 'MM/DD/YYYY', true);

                return cellDate.isBetween(formattedStartDate, formattedEndDate, null, '[]');
            });

            if (isInvalidRange) {
                $input.val('');
                picker.setStartDate(moment());
                picker.setEndDate(moment());

                displayValidationError(inputId, 'Selected date range should not contains already reserved Dates.');

                if (inputId === 'daterange001') {
                    correspondingInputId = 'calendarInput';
                } else if (inputId === 'calendarInput') {
                    correspondingInputId = 'daterange001';
                } else if (inputId.startsWith('daterange')) {
                    correspondingInputId = inputId.replace('daterange', 'calendarInput');
                } else if (inputId.startsWith('calendarInput')) {
                    correspondingInputId = inputId.replace('calendarInput', 'daterange');
                }

                const $correspondingInput = $(`#${correspondingInputId}`);
                if ($correspondingInput.data('daterangepicker')) {
                    const picker = $correspondingInput.data('daterangepicker');
                    picker.setStartDate(moment());
                    picker.setEndDate(moment());

                    if (!picker.container.is(':visible')) {
                        picker.show(); 
                    }
                    displayValidationError(correspondingInputId, 'Selected date range should not contains already reserved Dates.');
                    picker.hide();
                }

                if (inputDateRanges[correspondingInputId]) {
                    $correspondingInput.val('');
                    const { startDate, endDate } = inputDateRanges[correspondingInputId];

                    selectedDates = selectedDates.filter(date => {
                        return date < startDate || date > endDate;
                    });

                  
                    delete inputDateRanges[correspondingInputId];
                    if (autoSelectedDates[correspondingInputId]) {
                        autoSelectedDates[correspondingInputId].forEach(date => {
                            selectedDates = selectedDates.filter(d => d !== date);
                        });
                        delete autoSelectedDates[correspondingInputId];
                    }
                }
                $input.click();
                return;
            }

            // Checking for Sunday validation if facility type is "Cabin" and flagExcludeSundayCheckIn is true
            if (facilityType === "Cabin" && flagExcludeSundayCheckIn) {
                const startMoment = picker.startDate.clone();
                const endMoment = picker.endDate.clone();

                let includesSunday = false;
                while (startMoment.isBefore(endMoment) || startMoment.isSame(endMoment)) {
                    if (startMoment.day() === 0) { 
                        includesSunday = true;
                        break;
                    }
                    startMoment.add(1, 'days');
                }

                if (includesSunday) {
                    $input.val('');
                    picker.setStartDate(moment());
                    picker.setEndDate(moment());
                    displayValidationError(inputId, 'The Check-In date cannot fall on a Sunday. Kindly select an alternative date for your reservation.');

                    if (inputId === 'daterange001') {
                        correspondingInputId = 'calendarInput';
                    } else if (inputId === 'calendarInput') {
                        correspondingInputId = 'daterange001';
                    } else if (inputId.startsWith('daterange')) {
                        correspondingInputId = inputId.replace('daterange', 'calendarInput');
                    } else if (inputId.startsWith('calendarInput')) {
                        correspondingInputId = inputId.replace('calendarInput', 'daterange');
                    }

                    const $correspondingInput = $(`#${correspondingInputId}`);
                    if ($correspondingInput.data('daterangepicker')) {
                        const picker = $correspondingInput.data('daterangepicker');
                        if (!picker.container.is(':visible')) {
                            picker.show();
                        }
                        displayValidationError(correspondingInputId, 'Selected date range conflicts with existing selections.');
                        picker.hide();
                    }
                    return; 
                }
            }

            const hasOverlap = selectedDates.some(function (dateText) {
                const cellDate = moment.utc(dateText, 'MM/DD/YYYY'); 
                const isInRange = cellDate.isBetween(startingdate, endingdate, null, '[]');

                return isInRange;
            });

            if (hasOverlap) {
                picker.setStartDate(moment());
                picker.setEndDate(moment());
                displayValidationError(inputId, 'Selected date range conflicts with existing selections.');

                if (inputId === 'daterange001') {
                    correspondingInputId = 'calendarInput';
                } else if (inputId === 'calendarInput') {
                    correspondingInputId = 'daterange001';
                } else if (inputId.startsWith('daterange')) {
                    correspondingInputId = inputId.replace('daterange', 'calendarInput');
                } else if (inputId.startsWith('calendarInput')) {
                    correspondingInputId = inputId.replace('calendarInput', 'daterange');
                }

                const $correspondingInput = $(`#${correspondingInputId}`);
                if ($correspondingInput.data('daterangepicker')) {
                    
                    const picker = $correspondingInput.data('daterangepicker');
                    picker.setStartDate(moment());
                    picker.setEndDate(moment());
                    if (!picker.container.is(':visible')) {
                        picker.show(); 
                    }
                    displayValidationError(correspondingInputId, 'Selected date range conflicts with existing selections.');
                    picker.hide();
                }
                if (inputDateRanges[correspondingInputId]) {
                    $correspondingInput.val('');
                    const { startDate, endDate } = inputDateRanges[correspondingInputId];

                    delete inputDateRanges[correspondingInputId];
                    if (autoSelectedDates[correspondingInputId]) {
                        autoSelectedDates[correspondingInputId].forEach(date => {
                            selectedDates = selectedDates.filter(d => d !== date);
                        });
                        delete autoSelectedDates[correspondingInputId];
                    }
                }
                $input.click();
                $correspondingInput.click();
                return;
            }

            picker.container.find(`td.price-date:contains(${startDate})`).addClass('active');

            $(this).data('startDate', picker.startDate.format('MM/DD/YYYY'));
            $(this).data('endDate', picker.endDate.format('MM/DD/YYYY'));

            $('#hdnStartDate').val(picker.startDate.format('YYYY-MM-DD'));
            $('#hdnEndDate').val(picker.endDate.format('YYYY-MM-DD'));

            selectedDates.push(picker.startDate.format('MM/DD/YYYY'));
            selectedDates.push(picker.endDate.format('MM/DD/YYYY'));

            inputDateRanges[inputId] = {
                startDate, endDate,
                hdnStartDate: $('#hdnInputStartDate').val(),
                hdnEndDate: $('#hdnInputEndDate').val()
            };

            const selectedDateRange = `${startDate} - ${endDate}`;

            // Update the value of the current input field
            $(this).val(selectedDateRange);

            if (inputId === 'daterange001') {
                correspondingInputId = 'calendarInput';
            } else if (inputId === 'calendarInput') {
                correspondingInputId = 'daterange001';
            } else if (inputId.startsWith('daterange')) {
                correspondingInputId = inputId.replace('daterange', 'calendarInput');
            } else if (inputId.startsWith('calendarInput')) {
                correspondingInputId = inputId.replace('calendarInput', 'daterange');
            }

            const $correspondingInput = $(`#${correspondingInputId}`);
            if ($correspondingInput.length) {
                $correspondingInput.val(selectedDateRange);

                $('#hdnInputStartDateCorresponding').val(picker.startDate.format('YYYY-MM-DD'));
                $('#hdnInputEndDateCorresponding').val(picker.endDate.format('YYYY-MM-DD'));

                inputDateRanges[correspondingInputId] = {
                    startDate: $('#hdnStartDateCorresponding').val(),
                    endDate: $('#hdnEndDateCorresponding').val()
                };
            }

            inputDateRanges[correspondingInputId] = { startDate, endDate };

            handleMinMaxDateRangeSelection(picker.startDate, picker.endDate, $input);

            if (inputId === 'daterange001') {
                $(this).data('daterangepicker').show();
            }
            if (!validationOccurred) {
                initializeDatePickers();
            }
            $("#daterange001").data('daterangepicker').show();
        });

        $(document).on('click', function (e) {
            var $target = $(e.target);

            if ($target.hasClass('input-filed') || $target.closest('.input-filed').length) {
                return;
            }

            if (!$target.closest('#dateRangeDiv').length && !$target.closest('.daterangepicker').length) {
                // Keep the picker open
                e.stopPropagation();
                const daterangepicker = $('#daterange001').data('daterangepicker');
                if (daterangepicker) {
                    e.stopPropagation();
                    daterangepicker.show();
                }
            }
        });

        $("#daterange001").trigger("click");

        disableFutureDates(facilityType);
    }

    function displayValidationError(inputId, message) {
        const $input = $(`#${inputId}`);
        const picker = $input.data('daterangepicker');

        if (picker) {
            const $validationHeading = picker.container.find('.validation-heading');
            $validationHeading.addClass('active').show();

            const $invalidDates = picker.container.find('.invalid-dates');
            $invalidDates.addClass('active').show();
            $invalidDates.find('.validation-message').text(message);
        } else {

        }
        if (inputId === 'daterange001') {
            $('#append_datepicker_section').addClass('margin-bottom-60');
        }
    }


    let userNameElement = $('#userName');
    let cartIdElement = $('#cartId');

    let userName = userNameElement.length > 0 ? userNameElement.val().toLowerCase() : '';
    let hdncartId = cartIdElement.length > 0 ? cartIdElement.val().toLowerCase() : '';

    function fetchCalendarData() {
        const Name = userName;
        const cartId = hdncartId;
        const facilityId = window.facilityId;
        const year = new Date().getFullYear();
        const fromDate = `${year}-01-01`;
        const toDate = `${year + 2}-12-31`;

        $.ajax({
            url: '/Facility/GetFacilityCalendarData',
            type: 'GET',
            data: {
                facilityId: facilityId,
                year: year,
                fromDate: fromDate,
                toDate: toDate,
                UserName: Name,
                cartId: cartId
            },
            success: function (data) {
                const dataArray = Array.isArray(data) ? data : [data];

                const facilityUnavailability = dataArray[0]?.body?.result?.facilityUnavailability || [];
                const facilityGroupDates = dataArray[0]?.body?.result?.facilityGroupDates || [];
                const facilityNotAvailablePriceDates = dataArray[0]?.body?.result?.facilityNotAvailablePriceDates || [];
                const facilityAlreadySelectedDates = dataArray[0]?.body?.result?.selectedDates || [];

                unavailableDates = facilityUnavailability.map(item => {
                    if (item.unAvailableDate === '0001-01-01T00:00:00') {
                        return null;
                    } else {
                        const formattedDate = moment.utc(item.unAvailableDate).format('MM/DD/YYYY');
                        return { date: formattedDate, cssClass: item.reason === 'NA' ? 'nonselectabledates' : 'reserved-date' };
                    }
                }).filter(item => item !== null);

                notAvailablePriceDates = facilityNotAvailablePriceDates.map(item => moment.utc(item.date).format('MM/DD/YYYY'));
                selectedDates = facilityAlreadySelectedDates.map(item => moment.utc(item.date).format('MM/DD/YYYY'));


                groupDates = facilityGroupDates.flatMap(item => {
                    const fromDate = moment.utc(item.fromDate).format('MM/DD/YYYY');
                    const toDate = moment.utc(item.toDate).format('MM/DD/YYYY');
                    const dates = [];
                    for (let m = moment(fromDate); m.isSameOrBefore(toDate); m.add(1, 'days')) {
                        dates.push(m.format('MM/DD/YYYY'));
                    }
                    return dates;
                });

                groupDateList = facilityGroupDates;

                pastDates = [];
                let currentYearFromDate = moment.utc('1/1/' + year, 'MM/DD/YYYY');
                const now = moment().startOf('day');
                while (currentYearFromDate.isBefore(now)) {
                    pastDates.push(currentYearFromDate.format('MM/DD/YYYY'));
                    currentYearFromDate.add(1, 'days');
                }

                let priceUnavailableDates = [];
                let yearStartDate = moment.utc(fromDate, 'YYYY-MM-DD');
                let yearEndDate = moment.utc(toDate, 'YYYY-MM-DD');

                while (yearStartDate.isSameOrBefore(yearEndDate)) {
                    const formattedDate = yearStartDate.format('MM/DD/YYYY');

                    if (yearStartDate.isSameOrAfter(now) && !notAvailablePriceDates.includes(formattedDate)) {
                        priceUnavailableDates.push(formattedDate);
                    }

                    yearStartDate.add(1, 'days');
                }

                priceUnavailableDates.forEach(date => {
                    unavailableDates.push({ date: date, cssClass: 'nonselectabledates' });
                });


                if (selectedDates.length > 0) {
                    selectedDates.sort((a, b) => moment.utc(a, 'MM/DD/YYYY').diff(moment.utc(b, 'MM/DD/YYYY')));

                    const formattedRanges = [];
                    let rangeStart = selectedDates[0];
                    let rangeEnd = selectedDates[0];
                    let rangeCounter = 0;


                    for (let i = 1; i < selectedDates.length; i++) {
                        if (moment.utc(selectedDates[i]).isSameOrBefore(moment.utc(rangeEnd).add(1, 'days'))) {
                            rangeEnd = selectedDates[i];
                        } else {
                            rangeCounter++;
                            let calendarInputId = rangeCounter === 1 ? 'calendarInput' : `calendarInput${rangeCounter}`;
                            let dateRangeId = rangeCounter === 1 ? 'daterange001' : `daterange${rangeCounter}`;

                            formattedRanges.push(`${rangeStart} - ${rangeEnd}`);
                            inputDateRanges[calendarInputId] = {
                                startDate: rangeStart,
                                endDate: rangeEnd
                            };
                            inputDateRanges[dateRangeId] = {
                                startDate: rangeStart,
                                endDate: rangeEnd
                            };
                            rangeStart = selectedDates[i];
                            rangeEnd = selectedDates[i];
                        }
                        $('#hdnInputStartDate').val(rangeStart);
                        $('#hdnInputEndDate').val(rangeEnd);
                    }
                    if (rangeStart && rangeEnd) {

                        rangeCounter++;
                        formattedRanges.push(`${rangeStart} - ${rangeEnd}`);

                        let finalCalendarInputId = rangeCounter === 1 ? 'calendarInput' : `calendarInput${rangeCounter - 1}`;
                        let finalDateRangeId = rangeCounter === 1 ? 'daterange001' : `daterange${rangeCounter - 1}`;

                        inputDateRanges[finalCalendarInputId] = {
                            startDate: rangeStart,
                            endDate: rangeEnd
                        };
                        inputDateRanges[finalDateRangeId] = {
                            startDate: rangeStart,
                            endDate: rangeEnd
                        };
                        $('#hdnInputStartDateCorresponding').val(rangeStart);
                        $('#hdnInputEndDateCorresponding').val(rangeEnd);
                    }

                    for (const key in inputDateRanges) {
                        if (inputDateRanges.hasOwnProperty(key)) {

                        }
                    }

                    const existingInputsCount = $('#calendarContainer .icon-input').length - 1;
                    const existingDefaultInputsCount = $('#append_datepicker_section .daterangepicker ').length + 1;

                    const newInputsNeeded = formattedRanges.length - existingInputsCount;
                    const newDefaultInputsNeeded = formattedRanges.length - existingDefaultInputsCount;

                    if (newDefaultInputsNeeded > 0) {

                        createDefaultCalendarInputs(formattedRanges.slice(existingDefaultInputsCount, formattedRanges.length));

                    } else {

                    }

                    if (newInputsNeeded > 0) {
                        createCalendarInputs(formattedRanges.slice(existingInputsCount, formattedRanges.length));
                    } else {

                    }


                }

                initializeDatePickers();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.responseText) {

                }
            }
        });
    }

    function createCalendarInputs(formattedRanges) {
        $('#calendarContainer').empty();

        for (let i = 0; i < formattedRanges.length; i++) {
            const newInputCount = i === 0 ? '' : `${i}`;

            const showDeleteButton = i !== 0 && formattedRanges.length > 1;

            const newCalendarDiv = `
            <div class="icon-input icon-input-delete" data-calendar-id="${newInputCount}" id="calendarDiv${newInputCount}" style="width: 100%;">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <label for="calendarInput${newInputCount}" class="sr-only">Date Range</label>
                <input id="calendarInput${newInputCount}" type="text" name="daterange" value="${formattedRanges[i]}" placeholder="Select a date range" readonly style="width: 100%;">
                ${showDeleteButton ? `<button class="btn-delete"><i class="fa fa-minus-circle remove-date" data-remove="${newInputCount}"></i></button>` : ''}
            </div>`;

            $('#calendarContainer').append(newCalendarDiv);
        }

        initializeDatePickers();
    }


    function createDefaultCalendarInputs(formattedRanges) {
        $('#calendarContainer').empty();
        $('#dateRangeContainer').empty();

        for (let i = 0; i < formattedRanges.length; i++) {
            const newInputCount = getNextId();

            const newDateRangeDiv = `
            <div class="icon-input icon-input-delete" data-daterange-id="${newInputCount}" id="dateRangeDiv${newInputCount}">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <label for="daterange${newInputCount}" class="sr-only">Date Range</label>
                <input id="daterange${newInputCount}" type="text" name="daterange" value="${formattedRanges[i]}" placeholder="Select a date range" readonly>
                <button class="btn-delete"><i class="fa fa-minus-circle remove-date" data-remove="${newInputCount}"></i></button>
            </div>`;

            $('#dateRangeContainer').append(newDateRangeDiv);
        }

        initializeDatePickers();
    }

    function handleMinMaxDateRangeSelection(startDate, endDate, $input) {
        const startFormatted = startDate.format('MM/DD/YYYY');
        const endFormatted = endDate.format('MM/DD/YYYY');

        const inputId = $input.attr('id');

        const newSelectedDates = [];
        for (let m = moment.utc(startFormatted); m.isSameOrBefore(moment.utc(endFormatted)); m.add(1, 'days')) {
            newSelectedDates.push(m.format('MM/DD/YYYY'));
        }

        // Handle group date logic before counting total selected dates
        handleGroupDateAutoSelection(newSelectedDates, startDate, endDate, $input);


        const updatedStartDate = moment.utc(selectedDates[0], 'MM/DD/YYYY');
        const updatedEndDate = moment.utc(selectedDates[selectedDates.length - 1], 'MM/DD/YYYY');

        const totalNights = selectedDates.length;


        const startdateFormatted = startDate.utc().format('MMMM D'); 
        const enddateFormatted = endDate.utc().format('MMMM D'); 

        const minNights = minstay;
        const maxNights = maxstay;

        if (inputId === 'daterange001') {
            correspondingInputId = 'calendarInput';
        } else if (inputId === 'calendarInput') {
            correspondingInputId = 'daterange001';
        } else if (inputId.startsWith('daterange')) {
            correspondingInputId = inputId.replace('daterange', 'calendarInput');
        } else if (inputId.startsWith('calendarInput')) {
            correspondingInputId = inputId.replace('calendarInput', 'daterange');
        }

        if (selectedDates.length > maxSelectableDates) {
            $input.val('');
            $input.data('daterangepicker').setStartDate(moment());
            $input.data('daterangepicker').setEndDate(moment());
            const $correspondingInput = $(`#${correspondingInputId}`);
            if ($correspondingInput.length) {
                $correspondingInput.val('');
            }

            const dateRange = inputDateRanges[inputId];
            if (dateRange) {
                const { startDate, endDate } = dateRange;

                // Filter out the dates within the range from selectedDates
                selectedDates = selectedDates.filter(function (date) {
                    var dateObj = moment(date, 'MM/DD/YYYY');
                    return !(dateObj.isSameOrAfter(startDate) && dateObj.isSameOrBefore(endDate));
                });

                // Remove the date range from the mapping object
                delete inputDateRanges[inputId];
            }
            const timeUnit = (facilityType === "Campsite" || facilityType === "Cabin") ? "night(s)" : "day(s)";
            if (totalNights < minNights || totalNights > maxNights) {
                const message = `Your selection of ${startdateFormatted} thru ${enddateFormatted} is invalid. ` +
                    `You have ${totalNights} ${timeUnit} selected. This facility requires a minimum of ` +
                    `${minNights} ${timeUnit} and a maximum of ${maxNights} ${timeUnit} for a single reservation.`;
                displayValidationError(inputId, message);

            validationOccurred = true;
            if ($correspondingInput.data('daterangepicker')) {
                const picker = $correspondingInput.data('daterangepicker');

                if (!picker.container.is(':visible')) {
                    picker.show(); 
                }
                displayValidationError(correspondingInputId, message);
                picker.hide();
                }
            }

            return;
        }

        // Highlight the newly selected dates
        highlightSelectedDates(selectedDates);
        validationOccurred = false;

        // Disable date pickers if the maximum number of selectable dates is reached
        if (selectedDates.length >= maxSelectableDates) {
            $('input[name="daterange"]').each(function () {
                const $input = $(this);
                //$input.prop('disabled', true);
            });
        }
    }

    // Helper function to generate date range
    function generateDateRange(startDate, endDate) {
        const dates = [];
        for (let m = moment.utc(startDate); m.isSameOrBefore(moment.utc(endDate)); m.add(1, 'days')) {
            dates.push(m.format('MM/DD/YYYY'));
        }
        return dates;
    }

    // Function to highlight selected dates
    function highlightSelectedDates(dates) {
        // Remove previous highlights
        $('td').removeClass('selected-date');

        // Add class to newly selected dates
        dates.forEach(date => {
            $(`td[data-date="${date}"]`).addClass('selected-date');
        });
    }

    function clearSelectedDatesForInput(inputId) {
        // Check if the hidden fields have values before proceeding
        const hdnStartDate = $('#hdnStartDate').val();
        const hdnEndDate = $('#hdnEndDate').val();
        const hdnStartDateCorresponding = $('#hdnInputStartDateCorresponding').val();
        const hdnEndDateCorresponding = $('#hdnInputEndDateCorresponding').val();
        if (hdnStartDate || hdnEndDate || hdnStartDateCorresponding || hdnEndDateCorresponding) {
            if (inputDateRanges[inputId]) {
                const { startDate, endDate } = inputDateRanges[inputId];

                // Filter out dates previously selected by this input
                selectedDates = selectedDates.filter(date => {
                    return date < startDate || date > endDate;
                });

                // Clear the date range stored for this input
                delete inputDateRanges[inputId];
                if (autoSelectedDates[inputId]) {
                    autoSelectedDates[inputId].forEach(date => {
                        selectedDates = selectedDates.filter(d => d !== date);
                    });
                    delete autoSelectedDates[inputId];
                }
            }
            else if (hdnStartDateCorresponding || hdnEndDateCorresponding) {
                const startingDate = $('#hdnInputStartDateCorresponding').val();
                const endingDate = $('#hdnInputEndDateCorresponding').val();

                // Filter out dates previously selected by this input
                selectedDates = selectedDates.filter(date => {
                    return date < startingDate || date > endingDate;
                });

                // Clear the date range stored for this input
                delete inputDateRanges[inputId];
            }
            else {

            }
        }
        else {

        }


    }

    function handleGroupDateAutoSelection(newSelectedDates, startDate, endDate, $input) {

        const groupDateMap = {};
        const inputId = $input.attr('id');

        groupDateList.forEach(group => {
            const fromDate = moment.utc(group.fromDate).format('MM/DD/YYYY');
            const toDate = moment.utc(group.toDate).format('MM/DD/YYYY');
            const groupRange = [];
            for (let m = moment.utc(fromDate); m.isSameOrBefore(moment.utc(toDate)); m.add(1, 'days')) {
                groupRange.push(m.format('MM/DD/YYYY'));
            }
            groupRange.forEach(date => {
                groupDateMap[date] = groupRange;
            });
        });


        let datesToSelect = new Set();
        let datesToDeselect = new Set();

        // Check if any of the newly selected dates are part of a group
        newSelectedDates.forEach(date => {
            if (groupDateMap[date]) {
                groupDateMap[date].forEach(d => datesToSelect.add(d));
            } else {
                datesToSelect.add(date);
            }
        });

        let totalSelectedDates = datesToSelect.size;

        if (totalSelectedDates < minStayRequired) {
            const remainingDates = minStayRequired - datesToSelect.size;
            const startMoment = moment(startDate).clone(); // Clone startDate to avoid modifying the original

            // Always include the initially selected startDate
            datesToSelect.add(startMoment.format('MM/DD/YYYY'));

            // Add the remaining dates to meet minStayRequired
            for (let index = 0; index < remainingDates; index++) { // Start from 1 because startDate is already added
                const nextDate = startMoment.add(1, 'days').format('MM/DD/YYYY');
                if (groupDateMap[nextDate]) {
                    groupDateMap[nextDate].forEach(d => datesToSelect.add(d));
                } else {
                    datesToSelect.add(nextDate);
                }
            }
        }
        const picker = $input.data('daterangepicker');

        const isInvalidRange = Array.from(datesToSelect).some(date => {
            return unavailableDates.some(function (dateObj) {
                const dateText = dateObj.date; 
                const cellDate = moment.utc(`${startDate.month() + 1}/${dateText}/${startDate.year()}`, 'MM/DD/YYYY');
                return date === cellDate;
            });
        });

        selectedDates = selectedDates.filter(selectedDate => !datesToSelect.has(selectedDate));

        if (isInvalidRange) {
            $input.val('');
            picker.setStartDate(moment());
            picker.setEndDate(moment());
            startDate = moment();
            endDate = moment();
            return;
        }

        // Store auto-selected dates separately
        autoSelectedDates[inputId] = Array.from(datesToSelect).filter(date => !newSelectedDates.includes(date));

        // Auto-select all dates in the group
        selectedDates = Array.from(new Set([...selectedDates, ...datesToSelect]));


        if (datesToSelect.size > 0) {
            const newStartDate = moment.utc(Array.from(datesToSelect).sort()[0], 'MM/DD/YYYY');
            const newEndDate = moment.utc(Array.from(datesToSelect).sort().slice(-1)[0], 'MM/DD/YYYY');

            const correspondingdates = `${newStartDate.format('MM/DD/YYYY')} - ${newEndDate.format('MM/DD/YYYY')}`;

            if (inputId === 'daterange001') {
                correspondingInputId = 'calendarInput';
            } else if (inputId === 'calendarInput') {
                correspondingInputId = 'daterange001';
            } else if (inputId.startsWith('daterange')) {
                correspondingInputId = inputId.replace('daterange', 'calendarInput');
            } else if (inputId.startsWith('calendarInput')) {
                correspondingInputId = inputId.replace('calendarInput', 'daterange');
            }

            const $correspondingInput = $(`#${correspondingInputId}`);
            if ($correspondingInput.length) {
                $correspondingInput.val(correspondingdates);
            }

            inputDateRanges[correspondingInputId] = { startDate, endDate };
            if (picker) {
                picker.setStartDate(newStartDate);
                picker.setEndDate(newEndDate);
                $input.val(`${newStartDate.format('MM/DD/YYYY')} - ${newEndDate.format('MM/DD/YYYY')}`);
            }

        } else {

        }

        if ($input.val()) {
            return;
        }

    }

    function isDateDisabled(date) {
        const formattedDate = date.format('MM/DD/YYYY');
        if (facilityType === "Cabin" && flagExcludeSundayCheckIn) {
            if (date.day() === 0) {
                if (selectedDates.includes(formattedDate)) {
                    return false; 
                }
                return 'disabled'; 
            }
        }

        return false;
    }

    function disableFutureDates(facilityType) {

        if (typeof facilityType !== 'string' || !facilityType.trim()) {
            return '';
        }

        // Get today's date and calculate the future limits based on the facility type
        const today = new Date();
        let maxDate;

        switch (facilityType.toLowerCase()) {
            case 'campsite':
                // Disable dates more than 1 year in the future for campsite
                maxDate = new Date(today.setFullYear(today.getFullYear() + 1));
                break;
            case 'cabin':
            case 'lodge':
            case 'shelter':
            case 'other':
                // Disable dates more than 2 years in the future for other facilities
                maxDate = new Date(today.setFullYear(today.getFullYear() + 2));
                break;
            default:
                // Default case, no additional date restrictions
                maxDate = null;
                break;
        }

        // Convert maxDate to YYYY-MM-DD format for comparison
        const maxDateStr = maxDate ? maxDate.toISOString().split('T')[0] : '';

        return maxDateStr;
    }

    let lastUsedId = 0;

    function getNextId() {
        lastUsedId += 1;
        return lastUsedId;
    }

    $('#addDateBtn').click(function (e) {
        e.preventDefault();

        const newInputCount = getNextId();

        const newCalendarDiv = `
        <div class="icon-input icon-input-delete" data-calendar-id="${newInputCount}" id="calendarDiv${newInputCount}">
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <label for="calendarInput${newInputCount}" class="sr-only">Date Range</label>
            <input id="calendarInput${newInputCount}" type="text" autocomplete="off" name="daterange" value="" placeholder="Select a date range">
            <button class="btn-delete"><i class="fa fa-minus-circle remove-date" data-remove="${newInputCount}"></i></button>
        </div>
    `;
        $('#calendarContainer').append(newCalendarDiv);
        lastCreatedInputId = `calendarInput${newInputCount}`;

        // Create new date range div
        const newDateRangeDiv = `
        <div class="icon-input icon-input-delete" data-daterange-id="${newInputCount}" id="dateRangeDiv${newInputCount}">
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <label for="daterange${newInputCount}" class="sr-only">Date Range</label>
            <input id="daterange${newInputCount}" type="text" name="daterange" autocomplete="off" value="" placeholder="Select a date range">
            <button class="btn-delete"><i class="fa fa-minus-circle remove-date" data-remove="${newInputCount}"></i></button>
        </div>
    `;
        $('#dateRangeContainer').append(newDateRangeDiv);
        lastCreatedInputId = `daterange${newInputCount}`;
        initializeDatePickers();
    });

    // Initialize the last used ID based on existing elements
    $('.icon-input.calendar').each(function () {
        const id = parseInt($(this).data('calendar-id'));
        if (id > lastUsedId) {
            lastUsedId = id;
        }
    });

    // Handle remove button in dateRangeContainer
    $('#dateRangeContainer').on('click', '.remove-date', function () {
        const dateRangeId = $(this).data('remove');
        removeDateAndCalendarDivs(dateRangeId);
    });

    // Handle remove button in calendarContainer
    $('#calendarContainer').on('click', '.remove-date', function () {
        const calendarId = $(this).data('remove');
        removeDateAndCalendarDivs(calendarId);
    });

    // Handle remove button in dateRangeContainer
    $('#dateRangeContainer').on('click', '.remove-date', function () {
        const dateRangeId = $(this).data('remove');
        removeDateAndCalendarDivs(dateRangeId);
    });

    // Handle remove button in calendarContainer
    $('#calendarContainer').on('click', '.remove-date', function () {
        const calendarId = $(this).data('remove');
        removeDateAndCalendarDivs(calendarId);
    });

    // Function to remove both dateRange and calendar divs
    function removeDateAndCalendarDivs(id) {
        const dateRangeInputId = `daterange${id}`;
        const calendarInputId = `calendarInput${id}`;

        const dateRangeDiv = $(`#dateRangeDiv${id}`);
        const dateRangeInput = $(`#${dateRangeInputId}`);

        const calendarInputDiv = $(`#calendarDiv${id}`);
        const calendarInput = $(`#${calendarInputId}`);

        if (dateRangeInput.length && dateRangeInput.data('daterangepicker')) {
            const dateRange = inputDateRanges[calendarInputId];
            let startDate, endDate;

            if (dateRange) {
                startDate = dateRange.startDate;
                endDate = dateRange.endDate;
            }

            // Clear input values and remove related entries
            dateRangeInput.val('');
            calendarInput.val('');
            delete inputDateRanges[calendarInputId];
            delete inputDateRanges[dateRangeInputId];

            // Remove auto-selected dates associated with this input
            if (autoSelectedDates[calendarInputId]) {
                autoSelectedDates[calendarInputId].forEach(date => {
                    selectedDates = selectedDates.filter(d => d !== date);
                });
                delete autoSelectedDates[calendarInputId];
            }

            // Filter out the selected date range from selectedDates
            selectedDates = selectedDates.filter(function (date) {
                var dateObj = moment.utc(date, 'MM/DD/YYYY');
                return !(dateObj.isSameOrAfter(moment.utc(startDate)) && dateObj.isSameOrBefore(moment.utc(endDate)));
            });

            // Remove the daterangepicker instances
            dateRangeInput.data('daterangepicker').remove();
            calendarInput.data('daterangepicker').remove();
        }

        // Remove the elements from both containers
        dateRangeDiv.remove();
        calendarInputDiv.remove();

        // Reinitialize date pickers 
        initializeDatePickers();
    }

    fetchCalendarData();
    fetchCountyData()

    $(window).on('resize', function () {
        if ($(window).width() <= 1280) {
            setTimeout(function () {
                initializeDatePickers();
            }, 100);
        }
    });


    function fetchCountyData() {
        const countyId = window.countyId;
        const countyName = window.countyName;
        if (!countyName) {
            return;
        }
        $.ajax({
            url: `/County/${encodeURIComponent(countyName)}`,
            type: 'GET',
            data: {
                CountyId: countyId,
                CountyName: countyName
            },
            beforeSend: function () {
                showLoader();
            },
            success: function (data) {
                var $tempDiv = $('<div>').html(data);

                flagExcludeSundayCheckIn = $tempDiv.find('#flagExcludeSundayCheckIn').val() === "True";
                $('#hiddenFlagExcludeSundayCheckIn').val(flagExcludeSundayCheckIn);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.responseText) {

                }
            },
             complete: function () {
                hideLoaderAfterDelay();
            }
        });
    }



});