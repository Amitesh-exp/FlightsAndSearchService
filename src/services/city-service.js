const { CityRepository } = require ('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity() {
        try {
            const city = await this.CityRepository.createCity(data);
            return city; 
        } catch {
            throw {error}
        }
    } 

    async deleteCity() {
        try {
            const city = await this.CityRepository.dexleteCity(cityId);
            return city; 
        } catch {
            throw {error}
        }
    }

    async updateCity() {
        try {
            const city = await this.CityRepository.updateCity(cityId, data);
            return city; 
        } catch {
            throw {error}
        }
    }

    async getCity() {
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city; 
        } catch {
            throw {error}
        }
    }
}

module.exports = CityService