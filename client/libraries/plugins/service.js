'use strict';

import { ValuationService } from '../service/index';

export default Vue => {
    const services = {
        Valuation: ValuationService
    };

    //  mount the service to Vue
    Object.defineProperties(Vue, {
        services: { get: () => services }
    });

    //  mount the service to Vue component instance
    Object.defineProperties(Vue.prototype, {
        $services: { get: () => services }
    });
};
