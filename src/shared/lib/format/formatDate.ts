type DateFormatOptions = Intl.DateTimeFormatOptions & {
    showTime?: boolean;
};

const formatDate = (function () {
    return function (
        date: string | number | Date,
        locale = 'ru-RU',
        options: DateFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            showTime: false,
        },
    ): string {
        const parsedDate = new Date(date);

        if (isNaN(parsedDate.getTime())) {
            throw new Error('Invalid date');
        }

        const defaultDateOptions: Intl.DateTimeFormatOptions = {
            year: options.year ?? 'numeric',
            month: options.month ?? 'long',
            day: options.day ?? 'numeric',
        };

        const fullOptions: Intl.DateTimeFormatOptions = options.showTime
            ? {
                  ...defaultDateOptions,
                  hour: options.hour ?? '2-digit',
                  minute: options.minute ?? '2-digit',
                  second: options.second,
              }
            : defaultDateOptions;

        return new Intl.DateTimeFormat(locale, fullOptions).format(parsedDate);
    };
})();

const formatDateTime = (function () {
    return function (
        date: string | number | Date,
        locale = 'ru-RU',
        options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        },
    ) {
        return formatDate(date, locale, {...options, showTime: true});
    };
})();

export {formatDate, formatDateTime};
