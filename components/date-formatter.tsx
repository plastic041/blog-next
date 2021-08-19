import { format, parseISO } from 'date-fns';

import React from 'react';

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'yyyy년 M월 d일')}</time>;
};

export default DateFormatter;
