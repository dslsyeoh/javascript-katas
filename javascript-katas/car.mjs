const nbMonths = (startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) => 
{
    let months = 0, savings = 0;

    while(savings + startPriceOld < startPriceNew)
    {
        months++;
        savings += savingperMonth;

        if(months % 2 == 0) percentLossByMonth += 0.5;

        startPriceOld -= startPriceOld * (percentLossByMonth / 100);
        startPriceNew -= startPriceNew * (percentLossByMonth / 100);
    }

    return [months, Math.round(savings + startPriceOld - startPriceNew)];
}