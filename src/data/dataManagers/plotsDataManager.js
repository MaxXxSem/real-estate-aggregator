import data from "../datasets/plots.json";

class PlotsDataManager {
    static getPlots(city, filter, sorting, limit = 10, offset = 0) {
        // filters
        let plots = data.data.plots.filter(x => x.City === city);

        if (filter) {
            plots = plots.filter(
                x => (
                    (filter.priceFrom ? x.Info.Price >= filter.priceFrom : true)
                    && (filter.priceTo ? x.Info.Price <= filter.priceTo : true)
                    && (filter.plotAreaFrom ? (x.Info.PlotArea == null || x.Info.PlotArea >= filter.plotAreaFrom) : true)
                    && (filter.plotAreaTo ? (x.Info.PlotArea == null || x.Info.PlotArea <= filter.plotAreaTo) : true)
                    && (filter.plotType ? (x.Info.PlotType == null || x.Info.PlotType === filter.plotType) : true)
                    && (filter.noWorkWithRieltors && filter.noWorkWithRieltors == true ? (x.Info.OfferFrom == null || x.Info.OfferFrom !== "посредник") : true)
                )
            );
        }

        if (sorting) {
            let isAsc = sorting.order === "asc";
            if (sorting.key === "price") {
                plots.sort((a, b) => {
                    return a.Info.Price - b.Info.Price;
                });

                if (!isAsc)
                    plots = plots.reverse();
            } else if (sorting.key === "date") {
                plots.sort((a, b) => {
                    return new Date(a.Info.CreationDate).getTime() - new Date(b.Info.CreationDate).getTime();
                });

                if (!isAsc)
                    plots = plots.reverse();
            }
        }

        // pagination
        let plotsPage = plots.slice(offset, offset + limit);
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