class Plane {
    static type = 'Самолет';
    static instanceCount = 0;
    static maxInstances = 10;
    static speedCounts = new Map();

    static MIN_ALTITUDE = 1000;
    static MAX_ALTITUDE = 15000;
    static MIN_SPEED = 100;
    static MAX_SPEED = 1000;

    #cruiseSpeed;
    _maxAltitude = 10000;
    enginesCount;

    constructor(cruiseSpeed, maxAltitude, enginesCount = 2) {
        if (Plane.instanceCount >= Plane.maxInstances) {
            throw new Error('За лимитом');
        }

        const speedCount = Plane.speedCounts.get(cruiseSpeed) || 0;
        if (speedCount >= 2) {
            throw new Error('За лимитом скорости');
        }
        Plane.speedCounts.set(cruiseSpeed, speedCount + 1);

        Plane.instanceCount++;
        this.enginesCount = enginesCount;

        this.#validate(cruiseSpeed, Plane.MIN_SPEED, Plane.MAX_SPEED);
        this.#cruiseSpeed = cruiseSpeed;

        if (maxAltitude >= Plane.MIN_ALTITUDE && maxAltitude <= Plane.MAX_ALTITUDE) {
            this._maxAltitude = maxAltitude;
        }
    }

    #validate(val, min, max) {
        if (val < min || val > max) {
            throw new Error('За пределом');
        }
        return val;
    }

    get cruiseSpeed() {
        return this.#cruiseSpeed;
    }

    set cruiseSpeed(val) {
        this.#validate(val, Plane.MIN_SPEED, Plane.MAX_SPEED);
        this.#cruiseSpeed = val;
    }

    get maxAltitude() {
        return this._maxAltitude;
    }

    set maxAltitude(val) {
        this.#validate(val, Plane.MIN_ALTITUDE, Plane.MAX_ALTITUDE);
        this._maxAltitude = val;
    }

    #getUpperType() {
        return Plane.type.toUpperCase();
    }

    getCruiseSpeedInfo() {
        return `Крейсерская скорость: ${this.#cruiseSpeed} км/ч`;
    }

    getInfo() {
        return `Тип: ${this.#getUpperType()}, Двигателей: ${this.enginesCount}, Высота: ${this._maxAltitude}`;
    }
}

class PassengerPlane extends Plane {
    #seats;

    constructor(cruiseSpeed, maxAltitude, enginesCount, seats) {
        super(cruiseSpeed, maxAltitude, enginesCount);
        this.seats = seats;
    }

    get seats() {
        return this.#seats;
    }

    set seats(val) {
        if (val <= 0) throw new Error('Плохое значение');
        this.#seats = val;
    }

    getInfo() {
        return `${super.getInfo()}, Мест: ${this.#seats}`;
    }
}

class CargoPlane extends Plane {
    #capacity;

    constructor(cruiseSpeed, maxAltitude, enginesCount, capacity) {
        super(cruiseSpeed, maxAltitude, enginesCount);
        this.capacity = capacity;
    }

    get capacity() {
        return this.#capacity;
    }

    set capacity(val) {
        if (val <= 0) throw new Error('Плохое значение');
        this.#capacity = val;
    }

    getInfo() {
        return `${super.getInfo()}, Грузоподъемность: ${this.#capacity}`;
    }
}

let f = Plane()