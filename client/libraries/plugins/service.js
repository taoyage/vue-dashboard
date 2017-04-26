'use strict';

import {
    ValuationService,
    ContractService,
    MarginService,
    PositionService,
    SettlementService
} from '../service/index';

export default Vue => {
    const services = {
        Valuation: ValuationService,
        Contract: ContractService,
        Margin: MarginService,
        Position: PositionService,
        Settlement: SettlementService
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
