import DatePicker from 'react-datepicker';

class CommonConverter {

    convertJavaLocalDateTimeToReactDate(javaLocalDateTime) {
        return new Date(javaLocalDateTime);
    }

    convertReactDateToJavaLocalDateTime(reactDate) {
        return reactDate.toISOString().substring(0,10);
    }

}

export default new CommonConverter();