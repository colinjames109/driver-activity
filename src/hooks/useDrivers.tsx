export interface Driver {
    driverID: number,
    surname: string,
    forename: string,
    vehicleRegistration: string,
    traces: Trace[];
}

interface Activity {
    startTime: string,
    type: string,
    duration: number,
    hasTrace: boolean;
}

interface Trace {
    date: string,
    activity: Activity[];
}

export const getTotalDuration = (driverId: number) => {
    let totalDuration = 0;
    let t = 0;

    var driver = drivers.data.find((x: { driverID: number; }) => x.driverID === driverId);

    if (driver) {
        let traces = driver.traces;
        if (traces) {
            driver.traces.forEach(trace => {
                let activity = trace.activity;
                if (activity) {
                    activity.forEach(a => {
                        totalDuration += a.duration;
                    });
                }
            });
        }
    }

    return totalDuration;
};



export const getDailyTraces = (driverId: number) => {

    const dailyTraces: string | string[] = [];

    var driver = drivers.data.find((x: { driverID: number; }) => x.driverID === driverId);

    if (driver) {
        let traces = driver.traces;
        if (traces) {
            driver.traces.forEach(trace => {
                if (dailyTraces.indexOf(trace.date) < 0)
                    dailyTraces.push(trace.date);

            });
        }
    }

    return dailyTraces;
};


import drivers from '../data/drivers.json';

const useDrivers = () => ({ data: drivers.data });

export default useDrivers;