export class Place {
    id: string;
    name: string;
    category: string;
    address: string;
    phone: string;
    ratings: any;

    constructor() {
        this.ratings = {};
    }

    getAverageRate() {
        let sum = 0;
        let cont = 0;

        for(let id in this.ratings) {
            cont += 1;
            sum += parseFloat(this.ratings[id].rate);
        }

        return sum / (cont || 1);
    }
}