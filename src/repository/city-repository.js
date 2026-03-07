const { City } = require('../models/index');

class CityRepository {
    
    async createCity({ name }) {
        try {
            const city = await City.create({name});
            return city;
        } catch(error) {
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        } catch (error) {
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            // The below approach works but will not return updated object 
            // If we are using Postgres then returning: true can be used else not
            /* const city = await City.update(data, {
                where: {
                    id: cityId
                }
            }); */

            // for getting updated data in mysqlwe use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city; 
        } catch (error) {
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            throw {error};
        }
    }
}


module.exports = CityRepository;
