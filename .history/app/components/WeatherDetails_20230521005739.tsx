import { BsSunrise, BsSunset } from "react-icons/bs";
import { GiWindSlap, GiCompass } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { MdAir } from "react-icons/md";
const WeatherDetails = ({ data }) => {
  return (
    <>
      {data.current ? (
        <div className="p-12">
          <h1 className="mb-4 text-2xl text-white">Weather Details</h1>

          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
              <div className="text-2xl">
                <h3>Wind Speed</h3>
                <h3>{data.current.wind_mph} mph</h3>
              </div>
              <div className="text-5xl">
                <GiWindSlap fontSize={40} />
              </div>
            </div>
            <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
              <div className="text-2xl">
                <h3>Humidity</h3>
                <h3>{data.current.humidity}%</h3>
              </div>
              <div className="text-3xl">
                <WiHumidity fontSize={40} />
              </div>
            </div>
            <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
              <div className="text-2xl">
                <h3>Wind Direction</h3>
                <h3>{data.current.wind_dir}</h3>
              </div>
              <div className="text-5xl">
                <GiCompass fontSize={40} />
              </div>
            </div>
            <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
              <div className="text-2xl">
                <h3>Sunrise</h3>
                <h3>{data.forecast.forecastday[0].astro.sunrise}</h3>
              </div>
              <div className="text-3xl">
                <BsSunrise fontSize={40} />
              </div>
            </div>
            <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
              <div className="text-2xl">
                <h3>Sunset</h3>
                <h3>{data.forecast.forecastday[0].astro.sunset}</h3>
              </div>
              <div className="text-3xl">
                <BsSunset fontSize={40} />
              </div>
            </div>
            <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
              <div className="text-2xl">
                <h3>Air Pressure</h3>
                <h3>{data.current.pressure_mb} hPa</h3>
              </div>
              <div className="text-3xl">
                <MdAir fontSize={40} />
              </div>
            </div>
            <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
              <div className="text-2xl">
                <h3>Air Pressure</h3>
                <h3>{data.current.feelslike_c}</h3>
              </div>
              <div className="text-3xl">
                <MdAir fontSize={40} />
              </div>
            </div>
            <div className="bg-white/50 flex p-4">
              <div className="text-2xl">
                <h3>Wind</h3>
                <h3>17 km/h</h3>
              </div>
              <div className="text-white text-3xl">
                <MdAir />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default WeatherDetails;
