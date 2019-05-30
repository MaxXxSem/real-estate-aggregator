import data from "../datasets/plots.json";

class PlotsDataManager {
    static getPlots(city, filter, limit = 10, offset = 0) {
        // filters
        let plots = data.data.plots.filter(x => x.City === city);

        if (filter) {
            plots = plots.filter(
                x => (
                    (filter.priceFrom ? x.Info.Price >= filter.priceFrom : true)
                    && (filter.priceTo ? x.Info.Price <= filter.priceTo : true)
                    && (filter.plotAreaFrom ? (x.Info.PlotArea == null || x.Info.PlotArea >= filter.plotAreaFrom) : true)
                    && (filter.plotAreaTo ? (x.Info.PlotArea == null || x.Info.PlotArea <= filter.plotAreaTo) : true)
                    && (filter.plotType ? (x.Info.plotType == null || x.Info.plotType === filter.plotType) : true)
                    && (filter.noWorkWithRieltors && filter.noWorkWithRieltors == true ? (x.Info.OfferFrom == null || x.Info.OfferFrom !== "посредник") : true)
                )
            );
        }

        // pagination
        let plotsPage = plots.slice(offset, offset + limit);
        console.log(plotsPage);
        return {
            data: plotsPage, 
            nextOffset: offset + limit,
            totalCount: plots.length 
        };
    }

    static getPlot(id) {
        let plot = data.data.plots.filter(x => x.Id == id)[0];

        if (plot)
            return plot;
        else
            return null;
    }
}

export default PlotsDataManager;