export const fleetMock = [
  {
    fleetID: 'FE-B737-300',
    version: 1,
    identifier: 'FE-B737-300',
    opsFleetName: 'B737-300',
    crewFleetName: '737',
    withinFleetSwapCost: 100.0
  },
  {
    fleetID: 'FE-B737-500',
    version: 1,
    identifier: 'FE-B737-500',
    opsFleetName: 'B737-500',
    crewFleetName: '735',
    withinFleetSwapCost: 75.0
  },
  {
    fleetID: 'FE-B737-700',
    version: 1,
    identifier: 'FE-B737-700',
    opsFleetName: 'B737-700',
    crewFleetName: '73G',
    withinFleetSwapCost: 100.0
  },
  {
    fleetID: 'FE-B737-800',
    version: 1,
    identifier: 'FE-B737-800',
    opsFleetName: 'B737-800',
    crewFleetName: '738',
    withinFleetSwapCost: 100.0
  },
  {
    fleetID: 'FE-B737-900',
    version: 1,
    identifier: 'FE-B737-900',
    opsFleetName: 'B737-900',
    crewFleetName: '739',
    withinFleetSwapCost: 100.0
  },
  {
    fleetID: 'FE-B757-200',
    version: 1,
    identifier: 'FE-B757-200',
    opsFleetName: 'B757-200',
    crewFleetName: '757',
    withinFleetSwapCost: 150.0
  },
  {
    fleetID: 'FE-B757-300',
    version: 1,
    identifier: 'FE-B757-300',
    opsFleetName: 'B757-300',
    crewFleetName: '753',
    withinFleetSwapCost: 100.0
  },
  {
    fleetID: 'FE-B767-200',
    version: 1,
    identifier: 'FE-B767-200',
    opsFleetName: 'B767-200',
    crewFleetName: '762',
    withinFleetSwapCost: 100.0
  },
  {
    fleetID: 'FE-B767-400',
    version: 1,
    identifier: 'FE-B767-400',
    opsFleetName: 'B767-400',
    crewFleetName: '764',
    withinFleetSwapCost: 100.0
  },
  {
    fleetID: 'FE-B777-200',
    version: 1,
    identifier: 'FE-B777-200',
    opsFleetName: 'B777-200',
    crewFleetName: '777',
    withinFleetSwapCost: 100.0
  }
];

export const ATCControlledStationMOck = [
  {
    version: 1,
    slotList: {
      slot: [
        {
          flightID: 'FL-CO-20181112-BCN-EWR-121',
          atcSlotID: 'SL-EWR.241829A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:29:00.000+0000',
          arrivalSlotName: 'EWR.241829A',
          dptDateTimeCtrl: '2018-11-12T10:30:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'BCN',
          initialGateTimeDeparture: '240845',
          airlineCodeAndFlightNumber: 'COA0121'
        },
        {
          flightID: 'FL-CO-20181112-DEN-EWR-1029',
          atcSlotID: 'SL-EWR.241830A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:30:00.000+0000',
          arrivalSlotName: 'EWR.241830A',
          dptDateTimeCtrl: '2018-11-12T14:45:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'DEN',
          initialGateTimeDeparture: '241420',
          airlineCodeAndFlightNumber: 'COA1029'
        },
        {
          flightID: 'FL-CO-20181112-CDG-EWR-55',
          atcSlotID: 'SL-EWR.241831A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:31:00.000+0000',
          arrivalSlotName: 'EWR.241831A',
          dptDateTimeCtrl: '2018-11-12T11:06:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'CDG',
          initialGateTimeDeparture: '241055',
          airlineCodeAndFlightNumber: 'COA0055'
        },
        {
          flightID: 'FL-CO-20181112-FLL-EWR-700',
          atcSlotID: 'SL-EWR.241833A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:33:00.000+0000',
          arrivalSlotName: 'EWR.241833A',
          dptDateTimeCtrl: '2018-11-12T15:08:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'FLL',
          initialGateTimeDeparture: '241455',
          airlineCodeAndFlightNumber: 'COA0700'
        },
        {
          flightID: 'FL-CO-20181112-MAD-EWR-63',
          atcSlotID: 'SL-EWR.241835A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:35:00.000+0000',
          arrivalSlotName: 'EWR.241835A',
          dptDateTimeCtrl: '2018-11-12T10:45:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'MAD',
          initialGateTimeDeparture: '240935',
          airlineCodeAndFlightNumber: 'COA0063'
        },
        {
          atcSlotID: 'SL-EWR.241836A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:36:00.000+0000',
          arrivalSlotName: 'EWR.241836A',
          dptDateTimeCtrl: '2018-11-12T16:04:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'ATL',
          initialGateTimeDeparture: '241600',
          airlineCodeAndFlightNumber: 'BTA2084'
        },
        {
          flightID: 'FL-CO-20181112-EDI-EWR-109',
          atcSlotID: 'SL-EWR.241840A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:40:00.000+0000',
          arrivalSlotName: 'EWR.241840A',
          dptDateTimeCtrl: '2018-11-12T11:54:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'EDI',
          initialGateTimeDeparture: '241110',
          airlineCodeAndFlightNumber: 'COA0109'
        },
        {
          flightID: 'FL-CO-20181112-MCO-EWR-56',
          atcSlotID: 'SL-EWR.241843A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:43:00.000+0000',
          arrivalSlotName: 'EWR.241843A',
          dptDateTimeCtrl: '2018-11-12T15:55:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'MCO',
          initialGateTimeDeparture: '241535',
          airlineCodeAndFlightNumber: 'COA0056'
        },
        {
          flightID: 'FL-CO-20181112-TPA-EWR-619',
          atcSlotID: 'SL-EWR.241845A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:45:00.000+0000',
          arrivalSlotName: 'EWR.241845A',
          dptDateTimeCtrl: '2018-11-12T16:07:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'TPA',
          initialGateTimeDeparture: '241600',
          airlineCodeAndFlightNumber: 'COA0619'
        },
        {
          flightID: 'FL-CO-20181112-LHR-EWR-111',
          atcSlotID: 'SL-EWR.241846A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:46:00.000+0000',
          arrivalSlotName: 'EWR.241846A',
          dptDateTimeCtrl: '2018-11-12T11:31:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'LHR',
          initialGateTimeDeparture: '241105',
          airlineCodeAndFlightNumber: 'COA0111'
        },
        {
          flightID: 'FL-CO-20181112-HKG-EWR-98',
          atcSlotID: 'SL-EWR.241848A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:48:00.000+0000',
          arrivalSlotName: 'EWR.241848A',
          dptDateTimeCtrl: '2018-11-12T03:54:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'HKG',
          initialGateTimeDeparture: '240225',
          airlineCodeAndFlightNumber: 'COA0098'
        },
        {
          atcSlotID: 'SL-EWR.241850A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:50:00.000+0000',
          arrivalSlotName: 'EWR.241850A',
          dptDateTimeCtrl: '2018-11-12T16:13:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SAV',
          initialGateTimeDeparture: '241607',
          airlineCodeAndFlightNumber: 'BTA2543'
        },
        {
          atcSlotID: 'SL-EWR.241853A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:53:00.000+0000',
          arrivalSlotName: 'EWR.241853A',
          dptDateTimeCtrl: '2018-11-12T16:16:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'MSP',
          initialGateTimeDeparture: '241556',
          airlineCodeAndFlightNumber: 'BTA2470'
        },
        {
          flightID: 'FL-CO-20181112-PHX-EWR-734',
          atcSlotID: 'SL-EWR.241855A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:55:00.000+0000',
          arrivalSlotName: 'EWR.241855A',
          dptDateTimeCtrl: '2018-11-12T14:20:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'PHX',
          initialGateTimeDeparture: '241410',
          airlineCodeAndFlightNumber: 'COA0734'
        },
        {
          flightID: 'FL-CO-20181112-NAS-EWR-691',
          atcSlotID: 'SL-EWR.241856A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:56:00.000+0000',
          arrivalSlotName: 'EWR.241856A',
          dptDateTimeCtrl: '2018-11-12T15:56:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'NAS',
          initialGateTimeDeparture: '241550',
          airlineCodeAndFlightNumber: 'COA0691'
        },
        {
          flightID: 'FL-CO-20181112-MEX-EWR-1741',
          atcSlotID: 'SL-EWR.241858A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:58:00.000+0000',
          arrivalSlotName: 'EWR.241858A',
          dptDateTimeCtrl: '2018-11-12T14:15:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'MEX',
          initialGateTimeDeparture: '241405',
          airlineCodeAndFlightNumber: 'COA1741'
        },
        {
          flightID: 'FL-CO-20181112-MCO-EWR-693',
          atcSlotID: 'SL-EWR.241901A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:01:00.000+0000',
          arrivalSlotName: 'EWR.241901A',
          dptDateTimeCtrl: '2018-11-12T16:49:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'MCO',
          initialGateTimeDeparture: '241435',
          airlineCodeAndFlightNumber: 'COA0693'
        },
        {
          flightID: 'FL-CO-20181112-DFW-EWR-1134',
          atcSlotID: 'SL-EWR.241903A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:03:00.000+0000',
          arrivalSlotName: 'EWR.241903A',
          dptDateTimeCtrl: '2018-11-12T15:34:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'DFW',
          initialGateTimeDeparture: '241530',
          airlineCodeAndFlightNumber: 'COA1134'
        },
        {
          atcSlotID: 'SL-EWR.241905A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:05:00.000+0000',
          arrivalSlotName: 'EWR.241905A',
          dptDateTimeCtrl: '2018-11-12T17:05:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'BNA',
          initialGateTimeDeparture: '241659',
          airlineCodeAndFlightNumber: 'BTA2148'
        },
        {
          flightID: 'FL-CO-20181112-SJO-EWR-1797',
          atcSlotID: 'SL-EWR.241908A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:08:00.000+0000',
          arrivalSlotName: 'EWR.241908A',
          dptDateTimeCtrl: '2018-11-12T14:11:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SJO',
          initialGateTimeDeparture: '241400',
          airlineCodeAndFlightNumber: 'COA1797'
        },
        {
          flightID: 'FL-CO-20181112-FLL-EWR-1400',
          atcSlotID: 'SL-EWR.241910A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:10:00.000+0000',
          arrivalSlotName: 'EWR.241910A',
          dptDateTimeCtrl: '2018-11-12T16:18:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'FLL',
          initialGateTimeDeparture: '241610',
          airlineCodeAndFlightNumber: 'COA1400'
        },
        {
          flightID: 'FL-CO-20181112-IAH-EWR-106',
          atcSlotID: 'SL-EWR.241915A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:15:00.000+0000',
          arrivalSlotName: 'EWR.241915A',
          dptDateTimeCtrl: '2018-11-12T15:52:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '241545',
          airlineCodeAndFlightNumber: 'COA0106'
        },
        {
          flightID: 'FL-CO-20181112-LAS-EWR-569',
          atcSlotID: 'SL-EWR.241916A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:16:00.000+0000',
          arrivalSlotName: 'EWR.241916A',
          dptDateTimeCtrl: '2018-11-12T14:32:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'LAS',
          initialGateTimeDeparture: '241415',
          airlineCodeAndFlightNumber: 'COA0569'
        },
        {
          atcSlotID: 'SL-EWR.241923A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:23:00.000+0000',
          arrivalSlotName: 'EWR.241923A',
          dptDateTimeCtrl: '2018-11-12T16:39:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'OMA',
          initialGateTimeDeparture: '241636',
          airlineCodeAndFlightNumber: 'BTA2916'
        },
        {
          atcSlotID: 'SL-EWR.241930A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:30:00.000+0000',
          arrivalSlotName: 'EWR.241930A',
          dptDateTimeCtrl: '2018-11-12T17:49:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'TYS',
          initialGateTimeDeparture: '241740',
          airlineCodeAndFlightNumber: 'BTA2736'
        },
        {
          flightID: 'FL-CO-20181112-LAX-EWR-40',
          atcSlotID: 'SL-EWR.241931A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:31:00.000+0000',
          arrivalSlotName: 'EWR.241931A',
          dptDateTimeCtrl: '2018-11-12T14:26:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'LAX',
          initialGateTimeDeparture: '241400',
          airlineCodeAndFlightNumber: 'COA0040'
        },
        {
          atcSlotID: 'SL-EWR.241933A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:33:00.000+0000',
          arrivalSlotName: 'EWR.241933A',
          dptDateTimeCtrl: '2018-11-12T19:12:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'ABE',
          initialGateTimeDeparture: '241825',
          airlineCodeAndFlightNumber: 'BTA3064'
        },
        {
          atcSlotID: 'SL-EWR.241935A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:35:00.000+0000',
          arrivalSlotName: 'EWR.241935A',
          dptDateTimeCtrl: '2018-11-12T17:25:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'STL',
          initialGateTimeDeparture: '241725',
          airlineCodeAndFlightNumber: 'BTA2670'
        },
        {
          flightID: 'FL-CO-20181112-SFO-EWR-349',
          atcSlotID: 'SL-EWR.241940A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:40:00.000+0000',
          arrivalSlotName: 'EWR.241940A',
          dptDateTimeCtrl: '2018-11-12T14:32:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SFO',
          initialGateTimeDeparture: '241415',
          airlineCodeAndFlightNumber: 'COA0349'
        },
        {
          flightID: 'FL-CO-20181112-SEA-EWR-1580',
          atcSlotID: 'SL-EWR.241941A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:41:00.000+0000',
          arrivalSlotName: 'EWR.241941A',
          dptDateTimeCtrl: '2018-11-12T14:31:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SEA',
          initialGateTimeDeparture: '241430',
          airlineCodeAndFlightNumber: 'COA1580'
        },
        {
          flightID: 'FL-CO-20181112-AMS-EWR-71',
          atcSlotID: 'SL-EWR.241943A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:43:00.000+0000',
          arrivalSlotName: 'EWR.241943A',
          dptDateTimeCtrl: '2018-11-12T12:11:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'AMS',
          initialGateTimeDeparture: '241115',
          airlineCodeAndFlightNumber: 'COA0071'
        },
        {
          flightID: 'FL-CO-20181112-BOG-EWR-880',
          atcSlotID: 'SL-EWR.241945A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:45:00.000+0000',
          arrivalSlotName: 'EWR.241945A',
          dptDateTimeCtrl: '2018-11-12T14:14:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'BOG',
          initialGateTimeDeparture: '241400',
          airlineCodeAndFlightNumber: 'COA0880'
        },
        {
          flightID: 'FL-CO-20181112-PTY-EWR-886',
          atcSlotID: 'SL-EWR.241946A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:46:00.000+0000',
          arrivalSlotName: 'EWR.241946A',
          dptDateTimeCtrl: '2018-11-12T15:10:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'PTY',
          initialGateTimeDeparture: '241455',
          airlineCodeAndFlightNumber: 'COA0886'
        },
        {
          atcSlotID: 'SL-EWR.241948A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:48:00.000+0000',
          arrivalSlotName: 'EWR.241948A',
          dptDateTimeCtrl: '2018-11-12T19:12:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BWI',
          initialGateTimeDeparture: '241653',
          airlineCodeAndFlightNumber: 'BTA2342'
        },
        {
          flightID: 'FL-CO-20181112-AUS-EWR-251',
          atcSlotID: 'SL-EWR.241950A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:50:00.000+0000',
          arrivalSlotName: 'EWR.241950A',
          dptDateTimeCtrl: '2018-11-12T16:22:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'AUS',
          initialGateTimeDeparture: '241609',
          airlineCodeAndFlightNumber: 'COA0251'
        },
        {
          atcSlotID: 'SL-EWR.241951A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:51:00.000+0000',
          arrivalSlotName: 'EWR.241951A',
          dptDateTimeCtrl: '2018-11-12T19:09:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'SYR',
          initialGateTimeDeparture: '241725',
          airlineCodeAndFlightNumber: 'BTA2880'
        },
        {
          flightID: 'FL-CO-20181112-NAS-EWR-699',
          atcSlotID: 'SL-EWR.241955A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:55:00.000+0000',
          arrivalSlotName: 'EWR.241955A',
          dptDateTimeCtrl: '2018-11-12T17:17:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'NAS',
          initialGateTimeDeparture: '241715',
          airlineCodeAndFlightNumber: 'COA0699'
        },
        {
          flightID: 'FL-CO-20181112-LAS-EWR-769',
          atcSlotID: 'SL-EWR.241956A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:56:00.000+0000',
          arrivalSlotName: 'EWR.241956A',
          dptDateTimeCtrl: '2018-11-12T15:24:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'LAS',
          initialGateTimeDeparture: '241520',
          airlineCodeAndFlightNumber: 'COA0769'
        },
        {
          atcSlotID: 'SL-EWR.242001A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:01:00.000+0000',
          arrivalSlotName: 'EWR.242001A',
          dptDateTimeCtrl: '2018-11-12T19:18:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'PVD',
          initialGateTimeDeparture: '241720',
          airlineCodeAndFlightNumber: 'BTA2250'
        },
        {
          atcSlotID: 'SL-EWR.242005A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:05:00.000+0000',
          arrivalSlotName: 'EWR.242005A',
          dptDateTimeCtrl: '2018-11-12T19:15:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ROC',
          initialGateTimeDeparture: '241702',
          airlineCodeAndFlightNumber: 'BTA2864'
        },
        {
          atcSlotID: 'SL-EWR.242008A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:08:00.000+0000',
          arrivalSlotName: 'EWR.242008A',
          dptDateTimeCtrl: '2018-11-12T19:15:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'RIC',
          initialGateTimeDeparture: '241655',
          airlineCodeAndFlightNumber: 'BTA2188'
        },
        {
          atcSlotID: 'SL-EWR.242010A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:10:00.000+0000',
          arrivalSlotName: 'EWR.242010A',
          dptDateTimeCtrl: '2018-11-12T17:41:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'MEM',
          initialGateTimeDeparture: '241715',
          airlineCodeAndFlightNumber: 'BTA2249'
        },
        {
          flightID: 'FL-CO-20181112-SDQ-EWR-751',
          atcSlotID: 'SL-EWR.242011A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:11:00.000+0000',
          arrivalSlotName: 'EWR.242011A',
          dptDateTimeCtrl: '2018-11-12T16:46:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SDQ',
          initialGateTimeDeparture: '241620',
          airlineCodeAndFlightNumber: 'COA0751'
        },
        {
          flightID: 'FL-CO-20181112-SAN-EWR-1827',
          atcSlotID: 'SL-EWR.242013A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:13:00.000+0000',
          arrivalSlotName: 'EWR.242013A',
          dptDateTimeCtrl: '2018-11-12T15:24:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SAN',
          initialGateTimeDeparture: '241510',
          airlineCodeAndFlightNumber: 'COA1827'
        },
        {
          flightID: 'FL-CO-20181112-IAH-EWR-60',
          atcSlotID: 'SL-EWR.242016A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:16:00.000+0000',
          arrivalSlotName: 'EWR.242016A',
          dptDateTimeCtrl: '2018-11-12T17:13:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '241700',
          airlineCodeAndFlightNumber: 'COA0060'
        },
        {
          flightID: 'FL-CO-20181112-SNA-EWR-186',
          atcSlotID: 'SL-EWR.242018A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:18:00.000+0000',
          arrivalSlotName: 'EWR.242018A',
          dptDateTimeCtrl: '2018-11-12T15:25:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SNA',
          initialGateTimeDeparture: '241445',
          airlineCodeAndFlightNumber: 'COA0186'
        },
        {
          flightID: 'FL-CO-20181112-CUN-EWR-1733',
          atcSlotID: 'SL-EWR.242020A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:20:00.000+0000',
          arrivalSlotName: 'EWR.242020A',
          dptDateTimeCtrl: '2018-11-12T16:57:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'CUN',
          initialGateTimeDeparture: '241655',
          airlineCodeAndFlightNumber: 'COA1733'
        },
        {
          flightID: 'FL-CO-20181112-PEK-EWR-88',
          atcSlotID: 'SL-EWR.242021A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:21:00.000+0000',
          arrivalSlotName: 'EWR.242021A',
          dptDateTimeCtrl: '2018-11-12T07:51:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'PEK',
          initialGateTimeDeparture: '240745',
          airlineCodeAndFlightNumber: 'COA0088'
        },
        {
          flightID: 'FL-CO-20181112-PDX-EWR-485',
          atcSlotID: 'SL-EWR.242023A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:23:00.000+0000',
          arrivalSlotName: 'EWR.242023A',
          dptDateTimeCtrl: '2018-11-12T15:15:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'PDX',
          initialGateTimeDeparture: '241455',
          airlineCodeAndFlightNumber: 'COA0485'
        },
        {
          flightID: 'FL-CO-20181112-MIA-EWR-44',
          atcSlotID: 'SL-EWR.242025A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:25:00.000+0000',
          arrivalSlotName: 'EWR.242025A',
          dptDateTimeCtrl: '2018-11-12T17:43:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'MIA',
          initialGateTimeDeparture: '241735',
          airlineCodeAndFlightNumber: 'COA0044'
        },
        {
          atcSlotID: 'SL-EWR.242026A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:26:00.000+0000',
          arrivalSlotName: 'EWR.242026A',
          dptDateTimeCtrl: '2018-11-12T19:31:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'YUL',
          initialGateTimeDeparture: '241820',
          airlineCodeAndFlightNumber: 'BTA2389'
        },
        {
          flightID: 'FL-CO-20181112-BOS-EWR-1154',
          atcSlotID: 'SL-EWR.242028A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:28:00.000+0000',
          arrivalSlotName: 'EWR.242028A',
          dptDateTimeCtrl: '2018-11-12T19:39:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BOS',
          initialGateTimeDeparture: '241655',
          airlineCodeAndFlightNumber: 'COA1154'
        },
        {
          atcSlotID: 'SL-EWR.242030A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:30:00.000+0000',
          arrivalSlotName: 'EWR.242030A',
          dptDateTimeCtrl: '2018-11-12T19:30:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'YOW',
          initialGateTimeDeparture: '241827',
          airlineCodeAndFlightNumber: 'BTA2623'
        },
        {
          atcSlotID: 'SL-EWR.242031A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:31:00.000+0000',
          arrivalSlotName: 'EWR.242031A',
          dptDateTimeCtrl: '2018-11-12T19:30:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'YYZ',
          initialGateTimeDeparture: '241720',
          airlineCodeAndFlightNumber: 'BTA2477'
        },
        {
          atcSlotID: 'SL-EWR.242035A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:35:00.000+0000',
          arrivalSlotName: 'EWR.242035A',
          dptDateTimeCtrl: '2018-11-12T19:32:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MHT',
          initialGateTimeDeparture: '241700',
          airlineCodeAndFlightNumber: 'BTA2661'
        },
        {
          flightID: 'FL-CO-20181112-RSW-EWR-377',
          atcSlotID: 'SL-EWR.242040A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:40:00.000+0000',
          arrivalSlotName: 'EWR.242040A',
          dptDateTimeCtrl: '2018-11-12T18:04:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'RSW',
          initialGateTimeDeparture: '241800',
          airlineCodeAndFlightNumber: 'COA0377'
        },
        {
          flightID: 'FL-CO-20181112-PUJ-EWR-879',
          atcSlotID: 'SL-EWR.242043A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:43:00.000+0000',
          arrivalSlotName: 'EWR.242043A',
          dptDateTimeCtrl: '2018-11-12T17:15:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'PUJ',
          initialGateTimeDeparture: '241645',
          airlineCodeAndFlightNumber: 'COA0879'
        },
        {
          atcSlotID: 'SL-EWR.242046A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:46:00.000+0000',
          arrivalSlotName: 'EWR.242046A',
          dptDateTimeCtrl: '2018-11-12T19:06:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CVG',
          initialGateTimeDeparture: '241745',
          airlineCodeAndFlightNumber: 'BTA2612'
        },
        {
          flightID: 'FL-CO-20181112-NRT-EWR-8',
          atcSlotID: 'SL-EWR.242048A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:48:00.000+0000',
          arrivalSlotName: 'EWR.242048A',
          dptDateTimeCtrl: '2018-11-12T08:19:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'NRT',
          initialGateTimeDeparture: '240735',
          airlineCodeAndFlightNumber: 'COA0008'
        },
        {
          atcSlotID: 'SL-EWR.242100A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:00:00.000+0000',
          arrivalSlotName: 'EWR.242100A',
          dptDateTimeCtrl: '2018-11-12T19:33:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'YQB',
          initialGateTimeDeparture: '241740',
          airlineCodeAndFlightNumber: 'BTA3072'
        },
        {
          flightID: 'FL-CO-20181112-SXM-EWR-874',
          atcSlotID: 'SL-EWR.242105A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:05:00.000+0000',
          arrivalSlotName: 'EWR.242105A',
          dptDateTimeCtrl: '2018-11-12T17:17:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SXM',
          initialGateTimeDeparture: '241705',
          airlineCodeAndFlightNumber: 'COA0874'
        },
        {
          flightID: 'FL-CO-20181112-DFW-EWR-1136',
          atcSlotID: 'SL-EWR.242106A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:06:00.000+0000',
          arrivalSlotName: 'EWR.242106A',
          dptDateTimeCtrl: '2018-11-12T17:58:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'DFW',
          initialGateTimeDeparture: '241755',
          airlineCodeAndFlightNumber: 'COA1136'
        },
        {
          atcSlotID: 'SL-EWR.242108A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:08:00.000+0000',
          arrivalSlotName: 'EWR.242108A',
          dptDateTimeCtrl: '2018-11-12T19:45:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CMH',
          initialGateTimeDeparture: '241730',
          airlineCodeAndFlightNumber: 'BTA2838'
        },
        {
          flightID: 'FL-CO-20181112-CLE-EWR-50',
          atcSlotID: 'SL-EWR.242118A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:18:00.000+0000',
          arrivalSlotName: 'EWR.242118A',
          dptDateTimeCtrl: '2018-11-12T20:09:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CLE',
          initialGateTimeDeparture: '241850',
          airlineCodeAndFlightNumber: 'COA0050'
        },
        {
          flightID: 'FL-CO-20181112-BOS-EWR-1191',
          atcSlotID: 'SL-EWR.242120A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:20:00.000+0000',
          arrivalSlotName: 'EWR.242120A',
          dptDateTimeCtrl: '2018-11-12T20:32:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BOS',
          initialGateTimeDeparture: '241915',
          airlineCodeAndFlightNumber: 'COA1191'
        },
        {
          atcSlotID: 'SL-EWR.242121A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:21:00.000+0000',
          arrivalSlotName: 'EWR.242121A',
          dptDateTimeCtrl: '2018-11-12T19:20:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'YHZ',
          initialGateTimeDeparture: '241835',
          airlineCodeAndFlightNumber: 'BTA2430'
        },
        {
          flightID: 'FL-CO-20181112-SFO-EWR-1049',
          atcSlotID: 'SL-EWR.242123A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:23:00.000+0000',
          arrivalSlotName: 'EWR.242123A',
          dptDateTimeCtrl: '2018-11-12T16:12:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SFO',
          initialGateTimeDeparture: '241550',
          airlineCodeAndFlightNumber: 'COA1049'
        },
        {
          flightID: 'FL-CO-20181112-POP-EWR-712',
          atcSlotID: 'SL-EWR.242125A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:25:00.000+0000',
          arrivalSlotName: 'EWR.242125A',
          dptDateTimeCtrl: '2018-11-12T18:19:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'POP',
          initialGateTimeDeparture: '241815',
          airlineCodeAndFlightNumber: 'COA0712'
        },
        {
          flightID: 'FL-CO-20181112-CLT-EWR-337',
          atcSlotID: 'SL-EWR.242131A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:31:00.000+0000',
          arrivalSlotName: 'EWR.242131A',
          dptDateTimeCtrl: '2018-11-12T20:04:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CLT',
          initialGateTimeDeparture: '241910',
          airlineCodeAndFlightNumber: 'COA0337'
        },
        {
          atcSlotID: 'SL-EWR.242135A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:35:00.000+0000',
          arrivalSlotName: 'EWR.242135A',
          dptDateTimeCtrl: '2018-11-12T19:49:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IND',
          initialGateTimeDeparture: '241759',
          airlineCodeAndFlightNumber: 'BTA2064'
        },
        {
          flightID: 'FL-CO-20181112-FLL-EWR-800',
          atcSlotID: 'SL-EWR.242140A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:40:00.000+0000',
          arrivalSlotName: 'EWR.242140A',
          dptDateTimeCtrl: '2018-11-12T19:03:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'FLL',
          initialGateTimeDeparture: '241820',
          airlineCodeAndFlightNumber: 'COA0800'
        },
        {
          atcSlotID: 'SL-EWR.242141A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:41:00.000+0000',
          arrivalSlotName: 'EWR.242141A',
          dptDateTimeCtrl: '2018-11-12T19:35:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'JAX',
          initialGateTimeDeparture: '241750',
          airlineCodeAndFlightNumber: 'BTA3086'
        },
        {
          flightID: 'FL-CO-20181112-SJU-EWR-466',
          atcSlotID: 'SL-EWR.242150A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:50:00.000+0000',
          arrivalSlotName: 'EWR.242150A',
          dptDateTimeCtrl: '2018-11-12T18:26:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SJU',
          initialGateTimeDeparture: '241800',
          airlineCodeAndFlightNumber: 'COA0466'
        },
        {
          atcSlotID: 'SL-EWR.242153A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:53:00.000+0000',
          arrivalSlotName: 'EWR.242153A',
          dptDateTimeCtrl: '2018-11-12T20:01:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'SAV',
          initialGateTimeDeparture: '241836',
          airlineCodeAndFlightNumber: 'BTA2264'
        },
        {
          atcSlotID: 'SL-EWR.242156A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:56:00.000+0000',
          arrivalSlotName: 'EWR.242156A',
          dptDateTimeCtrl: '2018-11-12T20:08:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'SDF',
          initialGateTimeDeparture: '241810',
          airlineCodeAndFlightNumber: 'BTA2618'
        },
        {
          atcSlotID: 'SL-EWR.242158A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:58:00.000+0000',
          arrivalSlotName: 'EWR.242158A',
          dptDateTimeCtrl: '2018-11-12T20:06:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MKE',
          initialGateTimeDeparture: '241816',
          airlineCodeAndFlightNumber: 'BTA2866'
        },
        {
          atcSlotID: 'SL-EWR.242203A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:03:00.000+0000',
          arrivalSlotName: 'EWR.242203A',
          dptDateTimeCtrl: '2018-11-12T20:04:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ORD',
          initialGateTimeDeparture: '241720',
          airlineCodeAndFlightNumber: 'BTA3062'
        },
        {
          flightID: 'FL-CO-20181112-CUN-EWR-1731',
          atcSlotID: 'SL-EWR.242205A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:05:00.000+0000',
          arrivalSlotName: 'EWR.242205A',
          dptDateTimeCtrl: '2018-11-12T18:42:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'CUN',
          initialGateTimeDeparture: '241830',
          airlineCodeAndFlightNumber: 'COA1731'
        },
        {
          atcSlotID: 'SL-EWR.242206A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:06:00.000+0000',
          arrivalSlotName: 'EWR.242206A',
          dptDateTimeCtrl: '2018-11-12T20:40:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'GSO',
          initialGateTimeDeparture: '241900',
          airlineCodeAndFlightNumber: 'BTA2530'
        },
        {
          flightID: 'FL-CO-20181112-BDA-EWR-1660',
          atcSlotID: 'SL-EWR.242216A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:16:00.000+0000',
          arrivalSlotName: 'EWR.242216A',
          dptDateTimeCtrl: '2018-11-12T20:23:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BDA',
          initialGateTimeDeparture: '241855',
          airlineCodeAndFlightNumber: 'COA1660'
        },
        {
          flightID: 'FL-CO-20181112-MCO-EWR-36',
          atcSlotID: 'SL-EWR.242218A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:18:00.000+0000',
          arrivalSlotName: 'EWR.242218A',
          dptDateTimeCtrl: '2018-11-12T20:09:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MCO',
          initialGateTimeDeparture: '241910',
          airlineCodeAndFlightNumber: 'COA0036'
        },
        {
          atcSlotID: 'SL-EWR.242223A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:23:00.000+0000',
          arrivalSlotName: 'EWR.242223A',
          dptDateTimeCtrl: '2018-11-12T20:11:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MSP',
          initialGateTimeDeparture: '241852',
          airlineCodeAndFlightNumber: 'BTA2236'
        },
        {
          flightID: 'FL-CO-20181112-ATL-EWR-82',
          atcSlotID: 'SL-EWR.242226A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:26:00.000+0000',
          arrivalSlotName: 'EWR.242226A',
          dptDateTimeCtrl: '2018-11-12T20:32:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ATL',
          initialGateTimeDeparture: '241930',
          airlineCodeAndFlightNumber: 'COA0082'
        },
        {
          atcSlotID: 'SL-EWR.242235A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:35:00.000+0000',
          arrivalSlotName: 'EWR.242235A',
          dptDateTimeCtrl: '2018-11-12T21:45:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ROC',
          initialGateTimeDeparture: '241950',
          airlineCodeAndFlightNumber: 'BTA2415'
        },
        {
          flightID: 'FL-CO-20181112-MSY-EWR-217',
          atcSlotID: 'SL-EWR.242238A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:38:00.000+0000',
          arrivalSlotName: 'EWR.242238A',
          dptDateTimeCtrl: '2018-11-12T20:05:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MSY',
          initialGateTimeDeparture: '241910',
          airlineCodeAndFlightNumber: 'COA0217'
        },
        {
          flightID: 'FL-CO-20181112-FCO-EWR-85',
          atcSlotID: 'SL-EWR.242243A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:43:00.000+0000',
          arrivalSlotName: 'EWR.242243A',
          dptDateTimeCtrl: '2018-11-12T14:22:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'FCO',
          initialGateTimeDeparture: '241240',
          airlineCodeAndFlightNumber: 'COA0085'
        },
        {
          flightID: 'FL-CO-20181112-PHX-EWR-1434',
          atcSlotID: 'SL-EWR.242245A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:45:00.000+0000',
          arrivalSlotName: 'EWR.242245A',
          dptDateTimeCtrl: '2018-11-12T18:22:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'PHX',
          initialGateTimeDeparture: '241755',
          airlineCodeAndFlightNumber: 'COA1434'
        },
        {
          flightID: 'FL-CO-20181112-IAH-EWR-38',
          atcSlotID: 'SL-EWR.242246A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:46:00.000+0000',
          arrivalSlotName: 'EWR.242246A',
          dptDateTimeCtrl: '2018-11-12T19:51:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '241810',
          airlineCodeAndFlightNumber: 'COA0038'
        },
        {
          flightID: 'FL-CO-20181112-BOS-EWR-1105',
          atcSlotID: 'SL-EWR.242248A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:48:00.000+0000',
          arrivalSlotName: 'EWR.242248A',
          dptDateTimeCtrl: '2018-11-12T21:58:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BOS',
          initialGateTimeDeparture: '242040',
          airlineCodeAndFlightNumber: 'COA1105'
        },
        {
          atcSlotID: 'SL-EWR.242251A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:51:00.000+0000',
          arrivalSlotName: 'EWR.242251A',
          dptDateTimeCtrl: '2018-11-12T21:11:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IND',
          initialGateTimeDeparture: '242000',
          airlineCodeAndFlightNumber: 'BTA2036'
        },
        {
          atcSlotID: 'SL-EWR.242253A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:53:00.000+0000',
          arrivalSlotName: 'EWR.242253A',
          dptDateTimeCtrl: '2018-11-12T20:56:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ORD',
          initialGateTimeDeparture: '241900',
          airlineCodeAndFlightNumber: 'BTA2337'
        },
        {
          atcSlotID: 'SL-EWR.242256A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:56:00.000+0000',
          arrivalSlotName: 'EWR.242256A',
          dptDateTimeCtrl: '2018-11-12T21:08:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'DTW',
          initialGateTimeDeparture: '241950',
          airlineCodeAndFlightNumber: 'BTA3054'
        },
        {
          flightID: 'FL-CO-20181112-DEN-EWR-629',
          atcSlotID: 'SL-EWR.242258A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:58:00.000+0000',
          arrivalSlotName: 'EWR.242258A',
          dptDateTimeCtrl: '2018-11-12T19:42:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'DEN',
          initialGateTimeDeparture: '241835',
          airlineCodeAndFlightNumber: 'COA0629'
        },
        {
          atcSlotID: 'SL-EWR.242300A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:00:00.000+0000',
          arrivalSlotName: 'EWR.242300A',
          dptDateTimeCtrl: '2018-11-12T21:20:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CVG',
          initialGateTimeDeparture: '241958',
          airlineCodeAndFlightNumber: 'BTA2424'
        },
        {
          atcSlotID: 'SL-EWR.242301A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:01:00.000+0000',
          arrivalSlotName: 'EWR.242301A',
          dptDateTimeCtrl: '2018-11-12T20:36:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MCI',
          initialGateTimeDeparture: '241913',
          airlineCodeAndFlightNumber: 'BTA3092'
        },
        {
          flightID: 'FL-CO-20181112-LAX-EWR-16',
          atcSlotID: 'SL-EWR.242303A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:03:00.000+0000',
          arrivalSlotName: 'EWR.242303A',
          dptDateTimeCtrl: '2018-11-12T18:02:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'LAX',
          initialGateTimeDeparture: '241725',
          airlineCodeAndFlightNumber: 'COA0016'
        },
        {
          atcSlotID: 'SL-EWR.242305A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:05:00.000+0000',
          arrivalSlotName: 'EWR.242305A',
          dptDateTimeCtrl: '2018-11-12T20:43:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MEM',
          initialGateTimeDeparture: '241920',
          airlineCodeAndFlightNumber: 'BTA2667'
        },
        {
          flightID: 'FL-CO-20181112-IAH-EWR-62',
          atcSlotID: 'SL-EWR.242306A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:06:00.000+0000',
          arrivalSlotName: 'EWR.242306A',
          dptDateTimeCtrl: '2018-11-12T19:52:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '241925',
          airlineCodeAndFlightNumber: 'COA0062'
        },
        {
          flightID: 'FL-CO-20181112-CLE-EWR-110',
          atcSlotID: 'SL-EWR.242308A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:08:00.000+0000',
          arrivalSlotName: 'EWR.242308A',
          dptDateTimeCtrl: '2018-11-12T21:57:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CLE',
          initialGateTimeDeparture: '242055',
          airlineCodeAndFlightNumber: 'COA0110'
        },
        {
          flightID: 'FL-CO-20181112-MEX-EWR-1742',
          atcSlotID: 'SL-EWR.242315A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:15:00.000+0000',
          arrivalSlotName: 'EWR.242315A',
          dptDateTimeCtrl: '2018-11-12T18:51:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'MEX',
          initialGateTimeDeparture: '241835',
          airlineCodeAndFlightNumber: 'COA1742'
        },
        {
          atcSlotID: 'SL-EWR.242316A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:16:00.000+0000',
          arrivalSlotName: 'EWR.242316A',
          dptDateTimeCtrl: '2018-11-12T22:26:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MHT',
          initialGateTimeDeparture: '242003',
          airlineCodeAndFlightNumber: 'BTA2473'
        },
        {
          flightID: 'FL-CO-20181112-AUA-EWR-1643',
          atcSlotID: 'SL-EWR.242320A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:20:00.000+0000',
          arrivalSlotName: 'EWR.242320A',
          dptDateTimeCtrl: '2018-11-12T19:02:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'AUA',
          initialGateTimeDeparture: '241850',
          airlineCodeAndFlightNumber: 'COA1643'
        },
        {
          flightID: 'FL-CO-20181112-SAT-EWR-761',
          atcSlotID: 'SL-EWR.242326A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:26:00.000+0000',
          arrivalSlotName: 'EWR.242326A',
          dptDateTimeCtrl: '2018-11-12T19:51:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'SAT',
          initialGateTimeDeparture: '241930',
          airlineCodeAndFlightNumber: 'COA0761'
        },
        {
          flightID: 'FL-CO-20181112-PBI-EWR-855',
          atcSlotID: 'SL-EWR.242328A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:28:00.000+0000',
          arrivalSlotName: 'EWR.242328A',
          dptDateTimeCtrl: '2018-11-12T20:55:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'PBI',
          initialGateTimeDeparture: '241930',
          airlineCodeAndFlightNumber: 'COA0855'
        },
        {
          atcSlotID: 'SL-EWR.242330A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:30:00.000+0000',
          arrivalSlotName: 'EWR.242330A',
          dptDateTimeCtrl: '2018-11-12T22:20:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BTV',
          initialGateTimeDeparture: '242055',
          airlineCodeAndFlightNumber: 'BTA2307'
        },
        {
          atcSlotID: 'SL-EWR.242331A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:31:00.000+0000',
          arrivalSlotName: 'EWR.242331A',
          dptDateTimeCtrl: '2018-11-12T22:53:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BWI',
          initialGateTimeDeparture: '242155',
          airlineCodeAndFlightNumber: 'BTA2714'
        },
        {
          flightID: 'FL-CO-20181112-LAS-EWR-1579',
          atcSlotID: 'SL-EWR.242333A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:33:00.000+0000',
          arrivalSlotName: 'EWR.242333A',
          dptDateTimeCtrl: '2018-11-12T19:03:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'LAS',
          initialGateTimeDeparture: '241850',
          airlineCodeAndFlightNumber: 'COA1579'
        },
        {
          flightID: 'FL-CO-20181112-SFO-EWR-449',
          atcSlotID: 'SL-EWR.242335A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:35:00.000+0000',
          arrivalSlotName: 'EWR.242335A',
          dptDateTimeCtrl: '2018-11-12T18:27:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SFO',
          initialGateTimeDeparture: '241815',
          airlineCodeAndFlightNumber: 'COA0449'
        },
        {
          flightID: 'FL-CO-20181112-LAX-EWR-1703',
          atcSlotID: 'SL-EWR.242338A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:38:00.000+0000',
          arrivalSlotName: 'EWR.242338A',
          dptDateTimeCtrl: '2018-11-12T18:48:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'LAX',
          initialGateTimeDeparture: '241535',
          airlineCodeAndFlightNumber: 'COA1703'
        },
        {
          atcSlotID: 'SL-EWR.242340A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:40:00.000+0000',
          arrivalSlotName: 'EWR.242340A',
          dptDateTimeCtrl: '2018-11-12T21:58:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CHS',
          initialGateTimeDeparture: '242026',
          airlineCodeAndFlightNumber: 'BTA2074'
        },
        {
          atcSlotID: 'SL-EWR.242345A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:45:00.000+0000',
          arrivalSlotName: 'EWR.242345A',
          dptDateTimeCtrl: '2018-11-12T22:30:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ROC',
          initialGateTimeDeparture: '242105',
          airlineCodeAndFlightNumber: 'BTA2516'
        },
        {
          atcSlotID: 'SL-EWR.242346A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:46:00.000+0000',
          arrivalSlotName: 'EWR.242346A',
          dptDateTimeCtrl: '2018-11-12T22:41:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'RIC',
          initialGateTimeDeparture: '242115',
          airlineCodeAndFlightNumber: 'BTA2505'
        },
        {
          atcSlotID: 'SL-EWR.242348A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:48:00.000+0000',
          arrivalSlotName: 'EWR.242348A',
          dptDateTimeCtrl: '2018-11-12T22:11:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ORD',
          initialGateTimeDeparture: '242030',
          airlineCodeAndFlightNumber: 'BTA2994'
        },
        {
          atcSlotID: 'SL-EWR.242353A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:53:00.000+0000',
          arrivalSlotName: 'EWR.242353A',
          dptDateTimeCtrl: '2018-11-12T22:38:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'YUL',
          initialGateTimeDeparture: '242115',
          airlineCodeAndFlightNumber: 'BTA2701'
        },
        {
          atcSlotID: 'SL-EWR.250000A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:00:00.000+0000',
          arrivalSlotName: 'EWR.250000A',
          dptDateTimeCtrl: '2018-11-12T22:17:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'SDF',
          initialGateTimeDeparture: '242120',
          airlineCodeAndFlightNumber: 'BTA3082'
        },
        {
          flightID: 'FL-CO-20181112-TPA-EWR-119',
          atcSlotID: 'SL-EWR.250001A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:01:00.000+0000',
          arrivalSlotName: 'EWR.250001A',
          dptDateTimeCtrl: '2018-11-12T21:25:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'TPA',
          initialGateTimeDeparture: '242020',
          airlineCodeAndFlightNumber: 'COA0119'
        },
        {
          flightID: 'FL-CO-20181112-AUS-EWR-351',
          atcSlotID: 'SL-EWR.250008A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:08:00.000+0000',
          arrivalSlotName: 'EWR.250008A',
          dptDateTimeCtrl: '2018-11-12T20:32:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'AUS',
          initialGateTimeDeparture: '241920',
          airlineCodeAndFlightNumber: 'COA0351'
        },
        {
          flightID: 'FL-CO-20181112-SEA-EWR-1680',
          atcSlotID: 'SL-EWR.250010A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:10:00.000+0000',
          arrivalSlotName: 'EWR.250010A',
          dptDateTimeCtrl: '2018-11-12T19:08:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SEA',
          initialGateTimeDeparture: '241855',
          airlineCodeAndFlightNumber: 'COA1680'
        },
        {
          atcSlotID: 'SL-EWR.250011A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:11:00.000+0000',
          arrivalSlotName: 'EWR.250011A',
          dptDateTimeCtrl: '2018-11-12T22:57:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'YOW',
          initialGateTimeDeparture: '242130',
          airlineCodeAndFlightNumber: 'BTA2754'
        },
        {
          atcSlotID: 'SL-EWR.250013A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:13:00.000+0000',
          arrivalSlotName: 'EWR.250013A',
          dptDateTimeCtrl: '2018-11-12T22:26:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'DTW',
          initialGateTimeDeparture: '242100',
          airlineCodeAndFlightNumber: 'BTA2107'
        },
        {
          atcSlotID: 'SL-EWR.250015A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:15:00.000+0000',
          arrivalSlotName: 'EWR.250015A',
          dptDateTimeCtrl: '2018-11-12T22:32:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ATL',
          initialGateTimeDeparture: '242100',
          airlineCodeAndFlightNumber: 'BTA2452'
        },
        {
          atcSlotID: 'SL-EWR.250016A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:16:00.000+0000',
          arrivalSlotName: 'EWR.250016A',
          dptDateTimeCtrl: '2018-11-12T23:16:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BUF',
          initialGateTimeDeparture: '242152',
          airlineCodeAndFlightNumber: 'BTA2683'
        },
        {
          flightID: 'FL-CO-20181112-SJU-EWR-483',
          atcSlotID: 'SL-EWR.250018A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:18:00.000+0000',
          arrivalSlotName: 'EWR.250018A',
          dptDateTimeCtrl: '2018-11-12T20:50:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SJU',
          initialGateTimeDeparture: '242030',
          airlineCodeAndFlightNumber: 'COA0483'
        },
        {
          atcSlotID: 'SL-EWR.250020A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:20:00.000+0000',
          arrivalSlotName: 'EWR.250020A',
          dptDateTimeCtrl: '2018-11-12T22:55:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'YQB',
          initialGateTimeDeparture: '242115',
          airlineCodeAndFlightNumber: 'BTA2739'
        },
        {
          flightID: 'FL-CO-20181112-CLT-EWR-1408',
          atcSlotID: 'SL-EWR.250021A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:21:00.000+0000',
          arrivalSlotName: 'EWR.250021A',
          dptDateTimeCtrl: '2018-11-12T22:55:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CLT',
          initialGateTimeDeparture: '242115',
          airlineCodeAndFlightNumber: 'COA1408'
        },
        {
          flightID: 'FL-CO-20181112-LAX-EWR-90',
          atcSlotID: 'SL-EWR.250025A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:25:00.000+0000',
          arrivalSlotName: 'EWR.250025A',
          dptDateTimeCtrl: '2018-11-12T19:26:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'LAX',
          initialGateTimeDeparture: '241915',
          airlineCodeAndFlightNumber: 'COA0090'
        },
        {
          flightID: 'FL-CO-20181112-IAH-EWR-210',
          atcSlotID: 'SL-EWR.250026A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:26:00.000+0000',
          arrivalSlotName: 'EWR.250026A',
          dptDateTimeCtrl: '2018-11-12T21:22:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '242045',
          airlineCodeAndFlightNumber: 'COA0210'
        },
        {
          flightID: 'FL-CO-20181112-PBI-EWR-355',
          atcSlotID: 'SL-EWR.250030A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:30:00.000+0000',
          arrivalSlotName: 'EWR.250030A',
          dptDateTimeCtrl: '2018-11-12T22:09:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'PBI',
          initialGateTimeDeparture: '242050',
          airlineCodeAndFlightNumber: 'COA0355'
        },
        {
          atcSlotID: 'SL-EWR.250031A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:31:00.000+0000',
          arrivalSlotName: 'EWR.250031A',
          dptDateTimeCtrl: '2018-11-12T22:52:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IND',
          initialGateTimeDeparture: '242115',
          airlineCodeAndFlightNumber: 'BTA2022'
        },
        {
          flightID: 'FL-CO-20181112-BOS-EWR-1197',
          atcSlotID: 'SL-EWR.250033A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:33:00.000+0000',
          arrivalSlotName: 'EWR.250033A',
          dptDateTimeCtrl: '2018-11-12T23:33:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BOS',
          initialGateTimeDeparture: '242154',
          airlineCodeAndFlightNumber: 'COA1197'
        },
        {
          atcSlotID: 'SL-EWR.250035A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:35:00.000+0000',
          arrivalSlotName: 'EWR.250035A',
          dptDateTimeCtrl: '2018-11-12T22:56:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'GSP',
          initialGateTimeDeparture: '242125',
          airlineCodeAndFlightNumber: 'BTA2737'
        },
        {
          atcSlotID: 'SL-EWR.250036A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:36:00.000+0000',
          arrivalSlotName: 'EWR.250036A',
          dptDateTimeCtrl: '2018-11-12T22:47:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MKE',
          initialGateTimeDeparture: '242148',
          airlineCodeAndFlightNumber: 'BTA2685'
        },
        {
          flightID: 'FL-CO-20181112-MIA-EWR-539',
          atcSlotID: 'SL-EWR.250038A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:38:00.000+0000',
          arrivalSlotName: 'EWR.250038A',
          dptDateTimeCtrl: '2018-11-12T22:00:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MIA',
          initialGateTimeDeparture: '242035',
          airlineCodeAndFlightNumber: 'COA0539'
        },
        {
          atcSlotID: 'SL-EWR.250043A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:43:00.000+0000',
          arrivalSlotName: 'EWR.250043A',
          dptDateTimeCtrl: '2018-11-12T22:17:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MSP',
          initialGateTimeDeparture: '242135',
          airlineCodeAndFlightNumber: 'BTA2599'
        },
        {
          atcSlotID: 'SL-EWR.250048A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:48:00.000+0000',
          arrivalSlotName: 'EWR.250048A',
          dptDateTimeCtrl: '2018-11-12T23:26:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'GSO',
          initialGateTimeDeparture: '242235',
          airlineCodeAndFlightNumber: 'BTA2478'
        },
        {
          atcSlotID: 'SL-EWR.250055A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:55:00.000+0000',
          arrivalSlotName: 'EWR.250055A',
          dptDateTimeCtrl: '2018-11-12T22:59:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BNA',
          initialGateTimeDeparture: '242143',
          airlineCodeAndFlightNumber: 'BTA2567'
        },
        {
          atcSlotID: 'SL-EWR.250058A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:58:00.000+0000',
          arrivalSlotName: 'EWR.250058A',
          dptDateTimeCtrl: '2018-11-12T23:22:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'DAY',
          initialGateTimeDeparture: '242203',
          airlineCodeAndFlightNumber: 'BTA2774'
        },
        {
          flightID: 'FL-CO-20181112-LHR-EWR-19',
          atcSlotID: 'SL-EWR.250100A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:00:00.000+0000',
          arrivalSlotName: 'EWR.250100A',
          dptDateTimeCtrl: '2018-11-12T17:55:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'LHR',
          initialGateTimeDeparture: '241730',
          airlineCodeAndFlightNumber: 'COA0019'
        },
        {
          flightID: 'FL-CO-20181112-MCO-EWR-76',
          atcSlotID: 'SL-EWR.250103A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:03:00.000+0000',
          arrivalSlotName: 'EWR.250103A',
          dptDateTimeCtrl: '2018-11-12T22:35:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MCO',
          initialGateTimeDeparture: '242115',
          airlineCodeAndFlightNumber: 'COA0076'
        },
        {
          flightID: 'FL-CO-20181112-ORD-EWR-1186',
          atcSlotID: 'SL-EWR.250110A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:10:00.000+0000',
          arrivalSlotName: 'EWR.250110A',
          dptDateTimeCtrl: '2018-11-12T23:29:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ORD',
          initialGateTimeDeparture: '242215',
          airlineCodeAndFlightNumber: 'COA1186'
        },
        {
          atcSlotID: 'SL-EWR.250111A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:11:00.000+0000',
          arrivalSlotName: 'EWR.250111A',
          dptDateTimeCtrl: '2018-11-12T23:04:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'JAX',
          initialGateTimeDeparture: '242200',
          airlineCodeAndFlightNumber: 'BTA2128'
        },
        {
          atcSlotID: 'SL-EWR.250113A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:13:00.000+0000',
          arrivalSlotName: 'EWR.250113A',
          dptDateTimeCtrl: '2018-11-12T23:45:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CVG',
          initialGateTimeDeparture: '242221',
          airlineCodeAndFlightNumber: 'BTA2741'
        },
        {
          flightID: 'FL-CO-20181112-MCO-EWR-793',
          atcSlotID: 'SL-EWR.250116A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:16:00.000+0000',
          arrivalSlotName: 'EWR.250116A',
          dptDateTimeCtrl: '2018-11-12T22:57:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MCO',
          initialGateTimeDeparture: '242215',
          airlineCodeAndFlightNumber: 'COA0793'
        },
        {
          atcSlotID: 'SL-EWR.250118A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:18:00.000+0000',
          arrivalSlotName: 'EWR.250118A',
          dptDateTimeCtrl: '2018-11-12T22:43:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'OMA',
          initialGateTimeDeparture: '242123',
          airlineCodeAndFlightNumber: 'BTA3113'
        },
        {
          atcSlotID: 'SL-EWR.250120A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:20:00.000+0000',
          arrivalSlotName: 'EWR.250120A',
          dptDateTimeCtrl: '2018-11-13T00:14:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAD',
          initialGateTimeDeparture: '242252',
          airlineCodeAndFlightNumber: 'BTA2332'
        },
        {
          flightID: 'FL-CO-20181112-CLE-EWR-624',
          atcSlotID: 'SL-EWR.250123A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:23:00.000+0000',
          arrivalSlotName: 'EWR.250123A',
          dptDateTimeCtrl: '2018-11-13T00:07:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CLE',
          initialGateTimeDeparture: '242335',
          airlineCodeAndFlightNumber: 'COA0624'
        },
        {
          flightID: 'FL-CO-20181112-DFW-EWR-1138',
          atcSlotID: 'SL-EWR.250125A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:25:00.000+0000',
          arrivalSlotName: 'EWR.250125A',
          dptDateTimeCtrl: '2018-11-12T22:23:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'DFW',
          initialGateTimeDeparture: '242045',
          airlineCodeAndFlightNumber: 'COA1138'
        },
        {
          atcSlotID: 'SL-EWR.250128A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:28:00.000+0000',
          arrivalSlotName: 'EWR.250128A',
          dptDateTimeCtrl: '2018-11-12T23:23:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'STL',
          initialGateTimeDeparture: '242155',
          airlineCodeAndFlightNumber: 'BTA2868'
        },
        {
          flightID: 'FL-CO-20181112-FLL-EWR-1800',
          atcSlotID: 'SL-EWR.250131A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:31:00.000+0000',
          arrivalSlotName: 'EWR.250131A',
          dptDateTimeCtrl: '2018-11-12T22:46:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'FLL',
          initialGateTimeDeparture: '242130',
          airlineCodeAndFlightNumber: 'COA1800'
        },
        {
          flightID: 'FL-CO-20181112-SFO-EWR-549',
          atcSlotID: 'SL-EWR.250133A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:33:00.000+0000',
          arrivalSlotName: 'EWR.250133A',
          dptDateTimeCtrl: '2018-11-12T20:14:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SFO',
          initialGateTimeDeparture: '242000',
          airlineCodeAndFlightNumber: 'COA0549'
        },
        {
          flightID: 'FL-CO-20181112-BOS-EWR-1101',
          atcSlotID: 'SL-EWR.250135A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:35:00.000+0000',
          arrivalSlotName: 'EWR.250135A',
          dptDateTimeCtrl: '2018-11-13T00:43:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BOS',
          initialGateTimeDeparture: '242315',
          airlineCodeAndFlightNumber: 'COA1101'
        },
        {
          atcSlotID: 'SL-EWR.250136A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:36:00.000+0000',
          arrivalSlotName: 'EWR.250136A',
          dptDateTimeCtrl: '2018-11-12T23:03:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MCI',
          initialGateTimeDeparture: '242214',
          airlineCodeAndFlightNumber: 'BTA2914'
        },
        {
          atcSlotID: 'SL-EWR.250138A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:38:00.000+0000',
          arrivalSlotName: 'EWR.250138A',
          dptDateTimeCtrl: '2018-11-12T23:56:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CHS',
          initialGateTimeDeparture: '242253',
          airlineCodeAndFlightNumber: 'BTA2085'
        },
        {
          atcSlotID: 'SL-EWR.250145A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:45:00.000+0000',
          arrivalSlotName: 'EWR.250145A',
          dptDateTimeCtrl: '2018-11-13T00:47:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'YUL',
          initialGateTimeDeparture: '242335',
          airlineCodeAndFlightNumber: 'BTA3063'
        },
        {
          atcSlotID: 'SL-EWR.250148A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:48:00.000+0000',
          arrivalSlotName: 'EWR.250148A',
          dptDateTimeCtrl: '2018-11-13T00:03:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'SAV',
          initialGateTimeDeparture: '242255',
          airlineCodeAndFlightNumber: 'BTA2517'
        },
        {
          atcSlotID: 'SL-EWR.250151A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:51:00.000+0000',
          arrivalSlotName: 'EWR.250151A',
          dptDateTimeCtrl: '2018-11-13T00:03:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ATL',
          initialGateTimeDeparture: '242330',
          airlineCodeAndFlightNumber: 'BTA2398'
        },
        {
          flightID: 'FL-CO-20181112-LAS-EWR-1469',
          atcSlotID: 'SL-EWR.250153A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:53:00.000+0000',
          arrivalSlotName: 'EWR.250153A',
          dptDateTimeCtrl: '2018-11-12T21:19:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'LAS',
          initialGateTimeDeparture: '242105',
          airlineCodeAndFlightNumber: 'COA1469'
        },
        {
          flightID: 'FL-CO-20181112-TPA-EWR-1619',
          atcSlotID: 'SL-EWR.250156A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:56:00.000+0000',
          arrivalSlotName: 'EWR.250156A',
          dptDateTimeCtrl: '2018-11-12T23:26:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'TPA',
          initialGateTimeDeparture: '242233',
          airlineCodeAndFlightNumber: 'COA1619'
        },
        {
          atcSlotID: 'SL-EWR.250158A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:58:00.000+0000',
          arrivalSlotName: 'EWR.250158A',
          dptDateTimeCtrl: '2018-11-13T00:36:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CMH',
          initialGateTimeDeparture: '242345',
          airlineCodeAndFlightNumber: 'BTA2610'
        },
        {
          atcSlotID: 'SL-EWR.250200A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:00:00.000+0000',
          arrivalSlotName: 'EWR.250200A',
          dptDateTimeCtrl: '2018-11-13T00:22:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IND',
          initialGateTimeDeparture: '242330',
          airlineCodeAndFlightNumber: 'BTA2298'
        },
        {
          flightID: 'FL-CO-20181112-ORD-EWR-1174',
          atcSlotID: 'SL-EWR.250203A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:03:00.000+0000',
          arrivalSlotName: 'EWR.250203A',
          dptDateTimeCtrl: '2018-11-13T00:12:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ORD',
          initialGateTimeDeparture: '242315',
          airlineCodeAndFlightNumber: 'COA1174'
        },
        {
          atcSlotID: 'SL-EWR.250205A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:05:00.000+0000',
          arrivalSlotName: 'EWR.250205A',
          dptDateTimeCtrl: '2018-11-13T00:32:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'GRR',
          initialGateTimeDeparture: '242343',
          airlineCodeAndFlightNumber: 'BTA3073'
        },
        {
          flightID: 'FL-CO-20181112-LAX-EWR-612',
          atcSlotID: 'SL-EWR.250215A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:15:00.000+0000',
          arrivalSlotName: 'EWR.250215A',
          dptDateTimeCtrl: '2018-11-12T21:15:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'LAX',
          initialGateTimeDeparture: '242100',
          airlineCodeAndFlightNumber: 'COA0612'
        },
        {
          flightID: 'FL-CO-20181112-IAH-EWR-1010',
          atcSlotID: 'SL-EWR.250216A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:16:00.000+0000',
          arrivalSlotName: 'EWR.250216A',
          dptDateTimeCtrl: '2018-11-12T23:09:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '242250',
          airlineCodeAndFlightNumber: 'COA1010'
        },
        {
          flightID: 'FL-CO-20181112-RSW-EWR-577',
          atcSlotID: 'SL-EWR.250218A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:18:00.000+0000',
          arrivalSlotName: 'EWR.250218A',
          dptDateTimeCtrl: '2018-11-12T23:45:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'RSW',
          initialGateTimeDeparture: '242255',
          airlineCodeAndFlightNumber: 'COA0577'
        },
        {
          atcSlotID: 'SL-EWR.250221A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:21:00.000+0000',
          arrivalSlotName: 'EWR.250221A',
          dptDateTimeCtrl: '2018-11-13T00:41:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'DTW',
          initialGateTimeDeparture: '242345',
          airlineCodeAndFlightNumber: 'BTA2665'
        },
        {
          atcSlotID: 'SL-EWR.250230A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:30:00.000+0000',
          arrivalSlotName: 'EWR.250230A',
          dptDateTimeCtrl: '2018-11-13T01:43:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'DCA',
          initialGateTimeDeparture: '250100',
          airlineCodeAndFlightNumber: 'BTA2710'
        },
        {
          atcSlotID: 'SL-EWR.250231A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:31:00.000+0000',
          arrivalSlotName: 'EWR.250231A',
          dptDateTimeCtrl: '2018-11-13T00:32:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MSN',
          initialGateTimeDeparture: '242355',
          airlineCodeAndFlightNumber: 'BTA2197'
        },
        {
          atcSlotID: 'SL-EWR.250235A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:35:00.000+0000',
          arrivalSlotName: 'EWR.250235A',
          dptDateTimeCtrl: '2018-11-13T01:19:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'RDU',
          initialGateTimeDeparture: '250040',
          airlineCodeAndFlightNumber: 'BTA2492'
        },
        {
          atcSlotID: 'SL-EWR.250238A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:38:00.000+0000',
          arrivalSlotName: 'EWR.250238A',
          dptDateTimeCtrl: '2018-11-13T00:12:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MSP',
          initialGateTimeDeparture: '242340',
          airlineCodeAndFlightNumber: 'BTA2121'
        },
        {
          flightID: 'FL-CO-20181112-DFW-EWR-1140',
          atcSlotID: 'SL-EWR.250240A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:40:00.000+0000',
          arrivalSlotName: 'EWR.250240A',
          dptDateTimeCtrl: '2018-11-12T23:29:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'DFW',
          initialGateTimeDeparture: '242250',
          airlineCodeAndFlightNumber: 'COA1140'
        },
        {
          atcSlotID: 'SL-EWR.250241A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:41:00.000+0000',
          arrivalSlotName: 'EWR.250241A',
          dptDateTimeCtrl: '2018-11-13T00:09:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'XNA',
          initialGateTimeDeparture: '242337',
          airlineCodeAndFlightNumber: 'BTA2808'
        },
        {
          atcSlotID: 'SL-EWR.250243A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:43:00.000+0000',
          arrivalSlotName: 'EWR.250243A',
          dptDateTimeCtrl: '2018-11-13T00:58:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CLT',
          initialGateTimeDeparture: '250025',
          airlineCodeAndFlightNumber: 'BTA2488'
        },
        {
          atcSlotID: 'SL-EWR.250245A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:45:00.000+0000',
          arrivalSlotName: 'EWR.250245A',
          dptDateTimeCtrl: '2018-11-13T00:37:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'STL',
          initialGateTimeDeparture: '250005',
          airlineCodeAndFlightNumber: 'BTA2521'
        },
        {
          flightID: 'FL-CO-20181112-ORD-EWR-1162',
          atcSlotID: 'SL-EWR.250246A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:46:00.000+0000',
          arrivalSlotName: 'EWR.250246A',
          dptDateTimeCtrl: '2018-11-13T01:00:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ORD',
          initialGateTimeDeparture: '250015',
          airlineCodeAndFlightNumber: 'COA1162'
        },
        {
          atcSlotID: 'SL-EWR.250250A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:50:00.000+0000',
          arrivalSlotName: 'EWR.250250A',
          dptDateTimeCtrl: '2018-11-13T00:33:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MEM',
          initialGateTimeDeparture: '250000',
          airlineCodeAndFlightNumber: 'BTA2944'
        },
        {
          flightID: 'FL-CO-20181112-MCO-EWR-1593',
          atcSlotID: 'SL-EWR.250300A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T03:00:00.000+0000',
          arrivalSlotName: 'EWR.250300A',
          dptDateTimeCtrl: '2018-11-13T00:45:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MCO',
          initialGateTimeDeparture: '250015',
          airlineCodeAndFlightNumber: 'COA1593'
        },
        {
          flightID: 'FL-CO-20181112-FLL-EWR-200',
          atcSlotID: 'SL-EWR.250301A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T03:01:00.000+0000',
          arrivalSlotName: 'EWR.250301A',
          dptDateTimeCtrl: '2018-11-13T00:27:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'FLL',
          initialGateTimeDeparture: '242357',
          airlineCodeAndFlightNumber: 'COA0200'
        },
        {
          atcSlotID: 'SL-EWR.250303A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T03:03:00.000+0000',
          arrivalSlotName: 'EWR.250303A',
          dptDateTimeCtrl: '2018-11-13T01:16:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BNA',
          initialGateTimeDeparture: '250050',
          airlineCodeAndFlightNumber: 'BTA2882'
        },
        {
          flightID: 'FL-CO-20181112-LAS-EWR-1069',
          atcSlotID: 'SL-EWR.250305A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T03:05:00.000+0000',
          arrivalSlotName: 'EWR.250305A',
          dptDateTimeCtrl: '2018-11-12T22:21:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'LAS',
          initialGateTimeDeparture: '242208',
          airlineCodeAndFlightNumber: 'COA1069'
        },
        {
          atcSlotID: 'SL-EWR.250306A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T03:06:00.000+0000',
          arrivalSlotName: 'EWR.250306A',
          dptDateTimeCtrl: '2018-11-13T00:33:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MCI',
          initialGateTimeDeparture: '250005',
          airlineCodeAndFlightNumber: 'BTA2058'
        },
        {
          flightID: 'FL-CO-20181112-MIA-EWR-639',
          atcSlotID: 'SL-EWR.250308A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T03:08:00.000+0000',
          arrivalSlotName: 'EWR.250308A',
          dptDateTimeCtrl: '2018-11-13T00:30:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MIA',
          initialGateTimeDeparture: '242358',
          airlineCodeAndFlightNumber: 'COA0639'
        },
        {
          flightID: 'FL-CO-20181112-PBI-EWR-455',
          atcSlotID: 'SL-EWR.250310A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T03:10:00.000+0000',
          arrivalSlotName: 'EWR.250310A',
          dptDateTimeCtrl: '2018-11-13T00:42:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'PBI',
          initialGateTimeDeparture: '250007',
          airlineCodeAndFlightNumber: 'COA0455'
        },
        {
          flightID: 'FL-CO-20181112-LAX-EWR-1503',
          atcSlotID: 'SL-EWR.250330A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T03:30:00.000+0000',
          arrivalSlotName: 'EWR.250330A',
          dptDateTimeCtrl: '2018-11-12T22:40:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'LAX',
          initialGateTimeDeparture: '242230',
          airlineCodeAndFlightNumber: 'COA1503'
        },
        {
          flightID: 'FL-CO-20181112-IAH-EWR-310',
          atcSlotID: 'SL-EWR.250331A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T03:31:00.000+0000',
          arrivalSlotName: 'EWR.250331A',
          dptDateTimeCtrl: '2018-11-13T00:25:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '250005',
          airlineCodeAndFlightNumber: 'COA0310'
        },
        {
          flightID: 'FL-CO-20181112-SNA-EWR-386',
          atcSlotID: 'SL-EWR.250343A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T03:43:00.000+0000',
          arrivalSlotName: 'EWR.250343A',
          dptDateTimeCtrl: '2018-11-12T22:54:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SNA',
          initialGateTimeDeparture: '242245',
          airlineCodeAndFlightNumber: 'COA0386'
        },
        {
          flightID: 'FL-CO-20181112-SFO-EWR-649',
          atcSlotID: 'SL-EWR.250346A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T03:46:00.000+0000',
          arrivalSlotName: 'EWR.250346A',
          dptDateTimeCtrl: '2018-11-12T22:36:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'SFO',
          initialGateTimeDeparture: '242225',
          airlineCodeAndFlightNumber: 'COA0649'
        },
        {
          atcSlotID: 'SL-EWR.242225A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:25:00.000+0000',
          arrivalSlotName: 'EWR.242225A',
          dptDateTimeCtrl: '2018-11-12T21:07:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BUF',
          initialGateTimeDeparture: '241930',
          airlineCodeAndFlightNumber: 'CJC3437'
        },
        {
          atcSlotID: 'SL-EWR.242053A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:53:00.000+0000',
          arrivalSlotName: 'EWR.242053A',
          dptDateTimeCtrl: '2018-11-12T19:40:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ORF',
          initialGateTimeDeparture: '241750',
          airlineCodeAndFlightNumber: 'CJC3326'
        },
        {
          atcSlotID: 'SL-EWR.242113A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:13:00.000+0000',
          arrivalSlotName: 'EWR.242113A',
          dptDateTimeCtrl: '2018-11-12T20:22:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'PIT',
          initialGateTimeDeparture: '241840',
          airlineCodeAndFlightNumber: 'CJC3366'
        },
        {
          atcSlotID: 'SL-EWR.242148A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:48:00.000+0000',
          arrivalSlotName: 'EWR.242148A',
          dptDateTimeCtrl: '2018-11-12T20:59:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'DCA',
          initialGateTimeDeparture: '241855',
          airlineCodeAndFlightNumber: 'CJC3396'
        },
        {
          atcSlotID: 'SL-EWR.242310A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:10:00.000+0000',
          arrivalSlotName: 'EWR.242310A',
          dptDateTimeCtrl: '2018-11-12T22:18:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'DCA',
          initialGateTimeDeparture: '242100',
          airlineCodeAndFlightNumber: 'CJC3398'
        },
        {
          atcSlotID: 'SL-EWR.250201A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:01:00.000+0000',
          arrivalSlotName: 'EWR.250201A',
          dptDateTimeCtrl: '2018-11-13T00:54:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'PIT',
          initialGateTimeDeparture: '250000',
          airlineCodeAndFlightNumber: 'CJC3370'
        },
        {
          atcSlotID: 'SL-EWR.242215A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:15:00.000+0000',
          arrivalSlotName: 'EWR.242215A',
          dptDateTimeCtrl: '2018-11-12T21:44:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'AVP',
          initialGateTimeDeparture: '241944',
          airlineCodeAndFlightNumber: 'UCA8660'
        },
        {
          atcSlotID: 'SL-EWR.242321A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:21:00.000+0000',
          arrivalSlotName: 'EWR.242321A',
          dptDateTimeCtrl: '2018-11-12T22:16:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'PVD',
          initialGateTimeDeparture: '242100',
          airlineCodeAndFlightNumber: 'CJC3421'
        },
        {
          atcSlotID: 'SL-EWR.241958A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:58:00.000+0000',
          arrivalSlotName: 'EWR.241958A',
          dptDateTimeCtrl: '2018-11-12T19:13:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'MDT',
          initialGateTimeDeparture: '241657',
          airlineCodeAndFlightNumber: 'UCA8672'
        },
        {
          atcSlotID: 'SL-EWR.250005A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:05:00.000+0000',
          arrivalSlotName: 'EWR.250005A',
          dptDateTimeCtrl: '2018-11-12T23:36:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'PHL',
          initialGateTimeDeparture: '242145',
          airlineCodeAndFlightNumber: 'UCA8804'
        },
        {
          atcSlotID: 'SL-EWR.250040A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:40:00.000+0000',
          arrivalSlotName: 'EWR.250040A',
          dptDateTimeCtrl: '2018-11-12T23:39:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ALB',
          initialGateTimeDeparture: '242205',
          airlineCodeAndFlightNumber: 'UCA8749'
        },
        {
          atcSlotID: 'SL-EWR.242050A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:50:00.000+0000',
          arrivalSlotName: 'EWR.242050A',
          dptDateTimeCtrl: '2018-11-12T19:43:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'PWM',
          initialGateTimeDeparture: '241730',
          airlineCodeAndFlightNumber: 'CJC3295'
        },
        {
          atcSlotID: 'SL-EWR.242055A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:55:00.000+0000',
          arrivalSlotName: 'EWR.242055A',
          dptDateTimeCtrl: '2018-11-12T19:41:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BTV',
          initialGateTimeDeparture: '241655',
          airlineCodeAndFlightNumber: 'CJC3283'
        },
        {
          atcSlotID: 'SL-EWR.242341A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:41:00.000+0000',
          arrivalSlotName: 'EWR.242341A',
          dptDateTimeCtrl: '2018-11-12T22:06:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CMH',
          initialGateTimeDeparture: '242035',
          airlineCodeAndFlightNumber: 'CJC3352'
        },
        {
          atcSlotID: 'SL-EWR.241918A',
          isSlotHeld: true,
          arrDateTimeCtrl: '2018-11-12T19:18:00.000+0000',
          arrivalSlotName: 'EWR.241918A',
          dptDateTimeCtrl: '2018-11-12T18:33:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BDL',
          initialGateTimeDeparture: '241725',
          airlineCodeAndFlightNumber: 'UCA8809'
        },
        {
          atcSlotID: 'SL-EWR.242006A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:06:00.000+0000',
          arrivalSlotName: 'EWR.242006A',
          dptDateTimeCtrl: '2018-11-12T19:12:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAD',
          initialGateTimeDeparture: '241750',
          airlineCodeAndFlightNumber: 'UCA8774'
        },
        {
          atcSlotID: 'SL-EWR.242111A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:11:00.000+0000',
          arrivalSlotName: 'EWR.242111A',
          dptDateTimeCtrl: '2018-11-12T19:47:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'BUF',
          initialGateTimeDeparture: '241735',
          airlineCodeAndFlightNumber: 'CJC3435'
        },
        {
          atcSlotID: 'SL-EWR.242208A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:08:00.000+0000',
          arrivalSlotName: 'EWR.242208A',
          dptDateTimeCtrl: '2018-11-12T20:36:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'RDU',
          initialGateTimeDeparture: '241855',
          airlineCodeAndFlightNumber: 'CJC3336'
        },
        {
          atcSlotID: 'SL-EWR.250108A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:08:00.000+0000',
          arrivalSlotName: 'EWR.250108A',
          dptDateTimeCtrl: '2018-11-12T23:54:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'PIT',
          initialGateTimeDeparture: '242226',
          airlineCodeAndFlightNumber: 'CJC3368'
        },
        {
          atcSlotID: 'SL-EWR.242255A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:55:00.000+0000',
          arrivalSlotName: 'EWR.242255A',
          dptDateTimeCtrl: '2018-11-12T22:00:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ITH',
          initialGateTimeDeparture: '242002',
          airlineCodeAndFlightNumber: 'UCA8708'
        },
        {
          atcSlotID: 'SL-EWR.250006A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:06:00.000+0000',
          arrivalSlotName: 'EWR.250006A',
          dptDateTimeCtrl: '2018-11-12T22:50:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ORF',
          initialGateTimeDeparture: '242105',
          airlineCodeAndFlightNumber: 'CJC3328'
        },
        {
          atcSlotID: 'SL-EWR.250051A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:51:00.000+0000',
          arrivalSlotName: 'EWR.250051A',
          dptDateTimeCtrl: '2018-11-12T23:26:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'YYZ',
          initialGateTimeDeparture: '242145',
          airlineCodeAndFlightNumber: 'CJC3309'
        },
        {
          atcSlotID: 'SL-EWR.250206A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:06:00.000+0000',
          arrivalSlotName: 'EWR.250206A',
          dptDateTimeCtrl: '2018-11-13T01:01:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'YYZ',
          initialGateTimeDeparture: '250005',
          airlineCodeAndFlightNumber: 'CJC3319'
        },
        {
          atcSlotID: 'SL-EWR.250003A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:03:00.000+0000',
          arrivalSlotName: 'EWR.250003A',
          dptDateTimeCtrl: '2018-11-12T23:02:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAD',
          initialGateTimeDeparture: '242125',
          airlineCodeAndFlightNumber: 'UCA8820'
        },
        {
          atcSlotID: 'SL-EWR.250115A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:15:00.000+0000',
          arrivalSlotName: 'EWR.250115A',
          dptDateTimeCtrl: '2018-11-13T00:35:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'AVP',
          initialGateTimeDeparture: '242306',
          airlineCodeAndFlightNumber: 'UCA8822'
        },
        {
          atcSlotID: 'SL-EWR.250023A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:23:00.000+0000',
          arrivalSlotName: 'EWR.250023A',
          dptDateTimeCtrl: '2018-11-12T22:53:00.000+0000',
          slotControlType: 'SUB',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'RDU',
          initialGateTimeDeparture: '242120',
          airlineCodeAndFlightNumber: 'CJC3338'
        },
        {
          atcSlotID: 'SL-EWR.250106A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:06:00.000+0000',
          arrivalSlotName: 'EWR.250106A',
          dptDateTimeCtrl: '2018-11-13T00:16:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'DCA',
          initialGateTimeDeparture: '242300',
          airlineCodeAndFlightNumber: 'CJC3402'
        },
        {
          atcSlotID: 'SL-EWR.250130A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:30:00.000+0000',
          arrivalSlotName: 'EWR.250130A',
          dptDateTimeCtrl: '2018-11-13T00:06:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'YYZ',
          initialGateTimeDeparture: '242245',
          airlineCodeAndFlightNumber: 'CJC3311'
        },
        {
          atcSlotID: 'SL-EWR.250140A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:40:00.000+0000',
          arrivalSlotName: 'EWR.250140A',
          dptDateTimeCtrl: '2018-11-13T00:29:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'ORF',
          initialGateTimeDeparture: '242327',
          airlineCodeAndFlightNumber: 'CJC3340'
        },
        {
          atcSlotID: 'SL-EWR.242356A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:56:00.000+0000',
          arrivalSlotName: 'EWR.242356A',
          dptDateTimeCtrl: '2018-11-12T22:46:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'SYR',
          initialGateTimeDeparture: '242127',
          airlineCodeAndFlightNumber: 'UCA8690'
        },
        {
          atcSlotID: 'SL-EWR.250056A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T00:56:00.000+0000',
          arrivalSlotName: 'EWR.250056A',
          dptDateTimeCtrl: '2018-11-12T23:35:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'PWM',
          initialGateTimeDeparture: '242220',
          airlineCodeAndFlightNumber: 'CJC3297'
        },
        {
          atcSlotID: 'SL-EWR.241938A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:38:00.000+0000',
          arrivalSlotName: 'EWR.241938A',
          dptDateTimeCtrl: '2018-11-12T19:09:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'PHL',
          initialGateTimeDeparture: '241745',
          airlineCodeAndFlightNumber: 'UCA8824'
        }
      ],
      slotCount: 219
    },
    airportID: 'AP-EWR',
    identifier: 'CS-EWR-GDP',
    stationCode: 'EWR',
    updateHistory: {
      update: [
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        }
      ],
      updateCount: 1
    },
    stationControlType: 'GDP',
    isSubstitutionAllowed: true,
    atcControlledStationID: 'CS-EWR-GDP'
  },
  {
    version: 1,
    slotList: {
      slot: [
        {
          atcSlotID: 'SL-DEN.242305P',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:05:00.000+0000',
          arrivalSlotName: 'DEN.242305P',
          dptDateTimeCtrl: '2018-11-12T19:45:00.000+0000',
          slotControlType: 'UPD',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'EWR',
          initialGateTimeDeparture: '241845',
          airlineCodeAndFlightNumber: 'COA0728'
        },
        {
          atcSlotID: 'SL-DEN.250151A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:51:00.000+0000',
          arrivalSlotName: 'DEN.250151A',
          dptDateTimeCtrl: '2018-11-12T22:15:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'EWR',
          initialGateTimeDeparture: '241845',
          airlineCodeAndFlightNumber: 'COA0728'
        },
        {
          atcSlotID: 'SL-DEN.250157P',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:57:00.000+0000',
          arrivalSlotName: 'DEN.250157P',
          dptDateTimeCtrl: '2018-11-12T22:37:00.000+0000',
          slotControlType: 'UPD',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'EWR',
          initialGateTimeDeparture: '241845',
          airlineCodeAndFlightNumber: 'COA0728'
        },
        {
          flightID: 'FL-CO-20181112-EWR-DEN-728',
          atcSlotID: 'SL-DEN.242312A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:12:00.000+0000',
          arrivalSlotName: 'DEN.242312A',
          dptDateTimeCtrl: '2018-11-12T19:49:00.000+0000',
          slotControlType: 'UPD',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'EWR',
          initialGateTimeDeparture: '241845',
          airlineCodeAndFlightNumber: 'COA0728'
        },
        {
          atcSlotID: 'SL-DEN.250650A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T06:50:00.000+0000',
          arrivalSlotName: 'DEN.250650A',
          dptDateTimeCtrl: '2018-11-13T04:52:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '250155',
          airlineCodeAndFlightNumber: 'COA0299'
        },
        {
          flightID: 'FL-CO-20181112-IAH-DEN-299',
          atcSlotID: 'SL-DEN.250621A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T06:21:00.000+0000',
          arrivalSlotName: 'DEN.250621A',
          dptDateTimeCtrl: '2018-11-13T04:16:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '250155',
          airlineCodeAndFlightNumber: 'COA0299'
        },
        {
          atcSlotID: 'SL-DEN.250346A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T03:46:00.000+0000',
          arrivalSlotName: 'DEN.250346A',
          dptDateTimeCtrl: '2018-11-13T00:57:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CLE',
          initialGateTimeDeparture: '242040',
          airlineCodeAndFlightNumber: 'COA1421'
        },
        {
          flightID: 'FL-CO-20181112-CLE-DEN-1421',
          atcSlotID: 'SL-DEN.250218A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:18:00.000+0000',
          arrivalSlotName: 'DEN.250218A',
          dptDateTimeCtrl: '2018-11-12T23:33:00.000+0000',
          slotControlType: 'UPD',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CLE',
          initialGateTimeDeparture: '242040',
          airlineCodeAndFlightNumber: 'COA1421'
        },
        {
          flightID: 'FL-CO-20181112-IAH-DEN-599',
          atcSlotID: 'SL-DEN.242330A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:30:00.000+0000',
          arrivalSlotName: 'DEN.242330A',
          dptDateTimeCtrl: '2018-11-12T21:34:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '241915',
          airlineCodeAndFlightNumber: 'COA0599'
        },
        {
          atcSlotID: 'SL-DEN.250505A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T05:05:00.000+0000',
          arrivalSlotName: 'DEN.250505A',
          dptDateTimeCtrl: '2018-11-13T01:29:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'EWR',
          initialGateTimeDeparture: '242100',
          airlineCodeAndFlightNumber: 'COA0228'
        },
        {
          flightID: 'FL-CO-20181112-EWR-DEN-228',
          atcSlotID: 'SL-DEN.250404A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T04:04:00.000+0000',
          arrivalSlotName: 'DEN.250404A',
          dptDateTimeCtrl: '2018-11-13T00:43:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'EWR',
          initialGateTimeDeparture: '242100',
          airlineCodeAndFlightNumber: 'COA0228'
        },
        {
          atcSlotID: 'SL-DEN.250445A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T04:45:00.000+0000',
          arrivalSlotName: 'DEN.250445A',
          dptDateTimeCtrl: '2018-11-13T02:50:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '242245',
          airlineCodeAndFlightNumber: 'COA0059'
        },
        {
          flightID: 'FL-CO-20181112-IAH-DEN-59',
          atcSlotID: 'SL-DEN.250408A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T04:08:00.000+0000',
          arrivalSlotName: 'DEN.250408A',
          dptDateTimeCtrl: '2018-11-13T01:49:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '242245',
          airlineCodeAndFlightNumber: 'COA0059'
        }
      ],
      slotCount: 13
    },
    airportID: 'AP-DEN',
    identifier: 'CS-DEN-GDP',
    stationCode: 'DEN',
    updateHistory: {
      update: [
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        },
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        }
      ],
      updateCount: 26
    },
    stationControlType: 'GDP',
    isSubstitutionAllowed: true,
    atcControlledStationID: 'CS-DEN-GDP'
  },
  {
    version: 1,
    slotList: {
      slot: [
        {
          atcSlotID: 'SL-EWR.241821A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:21:00.000+0000',
          arrivalSlotName: 'EWR.241821A',
          dptDateTimeCtrl: '2018-11-12T17:31:00.000+0000',
          slotControlType: 'GS',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'YYZ',
          initialGateTimeDeparture: '241635',
          airlineCodeAndFlightNumber: 'BTA2351'
        },
        {
          atcSlotID: 'SL-EWR.241828A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T18:28:00.000+0000',
          arrivalSlotName: 'EWR.241828A',
          dptDateTimeCtrl: '2018-11-12T17:31:00.000+0000',
          slotControlType: 'GS',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'YUL',
          initialGateTimeDeparture: '241635',
          airlineCodeAndFlightNumber: 'BTA2643'
        }
      ],
      slotCount: 2
    },
    airportID: 'AP-EWR',
    identifier: 'CS-EWR-GS',
    stationCode: 'EWR',
    updateHistory: {
      update: [
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GS'
        }
      ],
      updateCount: 1
    },
    stationControlType: 'GS',
    isSubstitutionAllowed: false,
    atcControlledStationID: 'CS-EWR-GS'
  },
  {
    version: 1,
    slotList: {
      slot: [
        {
          flightID: 'FL-CO-20181112-CLE-LGA-1461',
          atcSlotID: 'SL-LGA.241332A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T13:32:00.000+0000',
          arrivalSlotName: 'LGA.241332A',
          dptDateTimeCtrl: '2018-11-12T11:55:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'CLE',
          initialGateTimeDeparture: '241135',
          airlineCodeAndFlightNumber: 'COA1461'
        },
        {
          flightID: 'FL-CO-20181112-CLE-LGA-1575',
          atcSlotID: 'SL-LGA.241347A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T13:47:00.000+0000',
          arrivalSlotName: 'LGA.241347A',
          dptDateTimeCtrl: '2018-11-12T12:10:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'CLE',
          initialGateTimeDeparture: '241205',
          airlineCodeAndFlightNumber: 'COA1575'
        },
        {
          flightID: 'FL-CO-20181112-IAH-LGA-332',
          atcSlotID: 'SL-LGA.241606A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T16:06:00.000+0000',
          arrivalSlotName: 'LGA.241606A',
          dptDateTimeCtrl: '2018-11-12T13:00:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: true,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '241250',
          airlineCodeAndFlightNumber: 'COA0332'
        },
        {
          flightID: 'FL-CO-20181112-IAH-LGA-232',
          atcSlotID: 'SL-LGA.241735P',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T17:35:00.000+0000',
          arrivalSlotName: 'LGA.241735P',
          dptDateTimeCtrl: '2018-11-12T14:30:00.000+0000',
          slotControlType: 'UPD',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '241412',
          airlineCodeAndFlightNumber: 'COA0232'
        },
        {
          flightID: 'FL-CO-20181112-IAH-LGA-432',
          atcSlotID: 'SL-LGA.242006A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:06:00.000+0000',
          arrivalSlotName: 'LGA.242006A',
          dptDateTimeCtrl: '2018-11-12T16:45:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '241545',
          airlineCodeAndFlightNumber: 'COA0432'
        },
        {
          flightID: 'FL-CO-20181112-IAH-LGA-1832',
          atcSlotID: 'SL-LGA.242045A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T20:45:00.000+0000',
          arrivalSlotName: 'LGA.242045A',
          dptDateTimeCtrl: '2018-11-12T17:34:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '241635',
          airlineCodeAndFlightNumber: 'COA1832'
        },
        {
          flightID: 'FL-CO-20181112-CLE-LGA-1450',
          atcSlotID: 'SL-LGA.242128A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T21:28:00.000+0000',
          arrivalSlotName: 'LGA.242128A',
          dptDateTimeCtrl: '2018-11-12T20:16:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CLE',
          initialGateTimeDeparture: '241940',
          airlineCodeAndFlightNumber: 'COA1450'
        },
        {
          flightID: 'FL-CO-20181112-IAH-LGA-532',
          atcSlotID: 'SL-LGA.242216A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T22:16:00.000+0000',
          arrivalSlotName: 'LGA.242216A',
          dptDateTimeCtrl: '2018-11-12T19:01:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '241820',
          airlineCodeAndFlightNumber: 'COA0532'
        },
        {
          atcSlotID: 'SL-LGA.242330A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T23:30:00.000+0000',
          arrivalSlotName: 'LGA.242330A',
          dptDateTimeCtrl: '2018-11-12T22:10:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CLE',
          initialGateTimeDeparture: '242100',
          airlineCodeAndFlightNumber: 'BTA2724'
        },
        {
          flightID: 'FL-CO-20181112-IAH-LGA-632',
          atcSlotID: 'SL-LGA.250128A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T01:28:00.000+0000',
          arrivalSlotName: 'LGA.250128A',
          dptDateTimeCtrl: '2018-11-12T22:08:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '242048',
          airlineCodeAndFlightNumber: 'COA0632'
        },
        {
          atcSlotID: 'SL-LGA.250220A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:20:00.000+0000',
          arrivalSlotName: 'LGA.250220A',
          dptDateTimeCtrl: '2018-11-13T01:00:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CLE',
          initialGateTimeDeparture: '242340',
          airlineCodeAndFlightNumber: 'BTA2013'
        },
        {
          flightID: 'FL-CO-20181112-IAH-LGA-1632',
          atcSlotID: 'SL-LGA.250315A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T03:15:00.000+0000',
          arrivalSlotName: 'LGA.250315A',
          dptDateTimeCtrl: '2018-11-12T23:59:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '242245',
          airlineCodeAndFlightNumber: 'COA1632'
        },
        {
          flightID: 'FL-CO-20181112-IAH-LGA-732',
          atcSlotID: 'SL-LGA.250430A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T04:30:00.000+0000',
          arrivalSlotName: 'LGA.250430A',
          dptDateTimeCtrl: '2018-11-13T01:22:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'IAH',
          initialGateTimeDeparture: '242355',
          airlineCodeAndFlightNumber: 'COA0732'
        },
        {
          atcSlotID: 'SL-LGA.241943A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T19:43:00.000+0000',
          arrivalSlotName: 'LGA.241943A',
          dptDateTimeCtrl: '2018-11-12T18:21:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CLE',
          initialGateTimeDeparture: '241615',
          airlineCodeAndFlightNumber: 'CHQ5806'
        },
        {
          atcSlotID: 'SL-LGA.250241A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-13T02:41:00.000+0000',
          arrivalSlotName: 'LGA.250241A',
          dptDateTimeCtrl: '2018-11-13T01:25:00.000+0000',
          slotControlType: 'BRG',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CLE',
          initialGateTimeDeparture: '250040',
          airlineCodeAndFlightNumber: 'CHQ5814'
        },
        {
          atcSlotID: 'SL-LGA.241748A',
          isSlotHeld: false,
          arrDateTimeCtrl: '2018-11-12T17:48:00.000+0000',
          arrivalSlotName: 'LGA.241748A',
          dptDateTimeCtrl: '2018-11-12T16:30:00.000+0000',
          slotControlType: 'GDP',
          isFormerPopUpFlight: false,
          wasExemptFromDelays: false,
          departureStationCode: 'CLE',
          initialGateTimeDeparture: '241452',
          airlineCodeAndFlightNumber: 'CHQ5804'
        }
      ],
      slotCount: 16
    },
    airportID: 'AP-LGA',
    identifier: 'CS-LGA-GDP',
    stationCode: 'LGA',
    updateHistory: {
      update: [
        {
          updateTime: '2018-11-12T19:51:00.000+0000',
          updateType: 'GDP'
        }
      ],
      updateCount: 1
    },
    stationControlType: 'GDP',
    isSubstitutionAllowed: true,
    atcControlledStationID: 'CS-LGA-GDP'
  }
];

export const aircraftMock = [
  {
    tail: '0001',
    version: 1,
    aircraftID: 'AC-0001',
    identifier: 'AC-0001',
    subfleetID: 'SF-77C276',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 226,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0002',
    version: 1,
    aircraftID: 'AC-0002',
    identifier: 'AC-0002',
    subfleetID: 'SF-77C276',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 226,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0003',
    version: 1,
    aircraftID: 'AC-0003',
    identifier: 'AC-0003',
    subfleetID: 'SF-77C276',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 226,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0004',
    version: 1,
    aircraftID: 'AC-0004',
    identifier: 'AC-0004',
    subfleetID: 'SF-77C285',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 235,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0005',
    version: 1,
    aircraftID: 'AC-0005',
    identifier: 'AC-0005',
    subfleetID: 'SF-77C285',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 235,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0007',
    version: 1,
    aircraftID: 'AC-0007',
    identifier: 'AC-0007',
    subfleetID: 'SF-77C285',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 235,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0008',
    version: 1,
    aircraftID: 'AC-0008',
    identifier: 'AC-0008',
    subfleetID: 'SF-77C285',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 235,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0009',
    version: 1,
    aircraftID: 'AC-0009',
    identifier: 'AC-0009',
    subfleetID: 'SF-77C285',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 235,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0010',
    version: 1,
    airportID: 'AP-HKG',
    aircraftID: 'AC-0010',
    identifier: 'AC-0010',
    subfleetID: 'SF-77C276',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 226,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0011',
    version: 1,
    aircraftID: 'AC-0011',
    identifier: 'AC-0011',
    subfleetID: 'SF-77C285',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 235,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0012',
    version: 1,
    aircraftID: 'AC-0012',
    identifier: 'AC-0012',
    subfleetID: 'SF-77C285',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 235,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0013',
    version: 1,
    aircraftID: 'AC-0013',
    identifier: 'AC-0013',
    subfleetID: 'SF-77C276',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 226,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0014',
    version: 1,
    airportID: 'AP-HKG',
    aircraftID: 'AC-0014',
    identifier: 'AC-0014',
    subfleetID: 'SF-77C276',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 226,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0015',
    version: 1,
    aircraftID: 'AC-0015',
    identifier: 'AC-0015',
    subfleetID: 'SF-77C276',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 226,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0016',
    version: 1,
    airportID: 'AP-HKG',
    aircraftID: 'AC-0016',
    identifier: 'AC-0016',
    subfleetID: 'SF-77C276',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 226,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0017',
    version: 1,
    aircraftID: 'AC-0017',
    identifier: 'AC-0017',
    subfleetID: 'SF-77C276',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 226,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0018',
    version: 1,
    airportID: 'AP-HKG',
    aircraftID: 'AC-0018',
    identifier: 'AC-0018',
    subfleetID: 'SF-77C276',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 226,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0019',
    version: 1,
    airportID: 'AP-HKG',
    aircraftID: 'AC-0019',
    identifier: 'AC-0019',
    subfleetID: 'SF-77C285',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 235,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  },
  {
    tail: '0021',
    version: 1,
    aircraftID: 'AC-0021',
    identifier: 'AC-0021',
    subfleetID: 'SF-77C276',
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 50,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 226,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    profileMembershipList: {
      profileMembership: [
        {
          profile: 'APU'
        }
      ],
      profileMembershipCount: 1
    },
    isCorrectiveActionRequired: false
  }
];

export const airportMock = [
  {
    city: 'MANILA',
    code: 'MNL',
    name: 'NINOY AQUINO INTERNATIONAL..',
    isHub: false,
    country: 'PH',
    version: 1,
    airportID: 'AP-MNL',
    offsetGMT: 480,
    identifier: 'AP-MNL',
    isServiced: false,
    airportGroupID: 'AG-INT',
    isInternational: true,
    isAllowableSubfleets: true,
    isCrewCustomsCheckRequired: true
  },
  {
    city: 'NARITA CHIBA',
    code: 'NRT',
    name: 'NARITA.-.NEW.TOKYO.INTL.....',
    isHub: false,
    country: 'JP',
    version: 1,
    airportID: 'AP-NRT',
    offsetGMT: 540,
    identifier: 'AP-NRT',
    isServiced: false,
    airportGroupID: 'AG-INT',
    isInternational: true,
    isAllowableSubfleets: true,
    isCrewCustomsCheckRequired: true
  },
  {
    city: 'DALLAS TX',
    code: 'DAL',
    name: 'DALLAS LOVE FIELD...........',
    isHub: false,
    country: 'US',
    version: 1,
    airportID: 'AP-DAL',
    offsetGMT: -360,
    identifier: 'AP-DAL',
    isServiced: false,
    airportGroupID: 'AG-DOM',
    isInternational: false,
    isAllowableSubfleets: true,
    isCrewCustomsCheckRequired: true
  },
  {
    city: 'LOS ANGELES',
    code: 'LAX',
    name: 'LOS.ANGELES.INTL.AIRPORT....',
    isHub: false,
    country: 'US',
    version: 1,
    airportID: 'AP-LAX',
    offsetGMT: -480,
    identifier: 'AP-LAX',
    isServiced: false,
    airportGroupID: 'AG-DOM',
    isInternational: false,
    isAllowableSubfleets: true,
    isCrewCustomsCheckRequired: true
  },
  {
    city: 'CHINA',
    code: 'PEK',
    name: 'BEIJING.....................',
    isHub: false,
    country: 'CN',
    version: 1,
    airportID: 'AP-PEK',
    offsetGMT: 480,
    identifier: 'AP-PEK',
    isServiced: false,
    airportGroupID: 'AG-INT',
    isInternational: true,
    isAllowableSubfleets: true,
    isCrewCustomsCheckRequired: true
  }
];

export const airportGroupMock = [
  {
    version: 1,
    identifier: 'AG-DOM',
    airportGroupID: 'AG-DOM',
    airlineSpecificProperties: {
      property: [
        {
          name: 'PILOT',
          value: ''
        },
        {
          name: 'INFLIGHT',
          value: ''
        },
        {
          name: 'OPERATIONAL',
          value: ''
        }
      ],
      propertyCount: 3
    }
  },
  {
    version: 1,
    identifier: 'AG-EU',
    airportGroupID: 'AG-EU',
    airlineSpecificProperties: {
      property: [
        {
          name: 'PILOT',
          value: ''
        },
        {
          name: 'INFLIGHT',
          value: ''
        },
        {
          name: 'OPERATIONAL',
          value: ''
        }
      ],
      propertyCount: 3
    }
  },
  {
    version: 1,
    identifier: 'AG-INT',
    airportGroupID: 'AG-INT',
    airlineSpecificProperties: {
      property: [
        {
          name: 'PILOT',
          value: ''
        },
        {
          name: 'INFLIGHT',
          value: ''
        },
        {
          name: 'OPERATIONAL',
          value: ''
        }
      ],
      propertyCount: 3
    }
  }
];

export const airportGroupRelationshipMock = [
  {
    version: 1,
    identifier: 'GR-DOM-DOM',
    destination: { airportGroupRef: { airportGroupID: 'AG-DOM' } },
    origination: { airportGroupRef: { airportGroupID: 'AG-DOM' } },
    operationalTokens: 'DOMESTIC',
    airportGroupRelationshipID: 'GR-DOM-DOM'
  },
  {
    version: 1,
    identifier: 'GR-DOM-EU',
    destination: { airportGroupRef: { airportGroupID: 'AG-EU' } },
    origination: { airportGroupRef: { airportGroupID: 'AG-DOM' } },
    operationalTokens: 'INTERNATIONAL',
    airportGroupRelationshipID: 'GR-DOM-EU'
  },
  {
    version: 1,
    identifier: 'GR-DOM-INT',
    destination: { airportGroupRef: { airportGroupID: 'AG-INT' } },
    origination: { airportGroupRef: { airportGroupID: 'AG-DOM' } },
    operationalTokens: 'INTERNATIONAL',
    airportGroupRelationshipID: 'GR-DOM-INT'
  },
  {
    version: 1,
    identifier: 'GR-EU-DOM',
    destination: { airportGroupRef: { airportGroupID: 'AG-DOM' } },
    origination: { airportGroupRef: { airportGroupID: 'AG-EU' } },
    operationalTokens: 'INTERNATIONAL EU-NON-INTERNAL',
    airportGroupRelationshipID: 'GR-EU-DOM'
  },
  {
    version: 1,
    identifier: 'GR-EU-EU',
    destination: { airportGroupRef: { airportGroupID: 'AG-EU' } },
    origination: { airportGroupRef: { airportGroupID: 'AG-EU' } },
    operationalTokens: 'INTERNATIONAL EU-INTERNAL',
    airportGroupRelationshipID: 'GR-EU-EU'
  },
  {
    version: 1,
    identifier: 'GR-EU-INT',
    destination: { airportGroupRef: { airportGroupID: 'AG-INT' } },
    origination: { airportGroupRef: { airportGroupID: 'AG-EU' } },
    operationalTokens: 'INTERNATIONAL EU-NON-INTERNAL',
    airportGroupRelationshipID: 'GR-EU-INT'
  },
  {
    version: 1,
    identifier: 'GR-INT-DOM',
    destination: { airportGroupRef: { airportGroupID: 'AG-DOM' } },
    origination: { airportGroupRef: { airportGroupID: 'AG-INT' } },
    operationalTokens: 'INTERNATIONAL',
    airportGroupRelationshipID: 'GR-INT-DOM'
  },
  {
    version: 1,
    identifier: 'GR-INT-EU',
    destination: { airportGroupRef: { airportGroupID: 'AG-EU' } },
    origination: { airportGroupRef: { airportGroupID: 'AG-INT' } },
    operationalTokens: 'INTERNATIONAL',
    airportGroupRelationshipID: 'GR-INT-EU'
  },
  {
    version: 1,
    identifier: 'GR-INT-INT',
    destination: { airportGroupRef: { airportGroupID: 'AG-INT' } },
    origination: { airportGroupRef: { airportGroupID: 'AG-INT' } },
    operationalTokens: 'INTERNATIONAL',
    airportGroupRelationshipID: 'GR-INT-INT'
  }
];

export const crewMock = [
  {
    name: 'GILMORE, WILLIAM',
    crewID: 'CR-0326K',
    version: 1,
    bidPeriods: {
      bidPeriod: [
        {
          code: '1005',
          baseID: 'CB-E',
          seniority: 90,
          startDate: '2018-10-22',
          positionID: 'PO-CA',
          mtdBlockTime: 3511,
          blockTimeDate: '2018-11-05',
          assignmentType: 'LINE_HOLDER'
        },
        {
          code: '1006',
          baseID: 'CB-E',
          seniority: 90,
          startDate: '2018-11-21',
          positionID: 'PO-CA',
          mtdBlockTime: 0,
          assignmentType: 'LINE_HOLDER'
        }
      ],
      bidPeriodCount: 2
    },
    employeeID: '0326K',
    identifier: 'CR-0326K',
    blockHistory: {
      dateMinutes: [
        {
          date: '2018-10-25',
          totalMinutes: 783
        },
        {
          date: '2018-10-26',
          totalMinutes: 25
        },
        {
          date: '2018-10-27',
          totalMinutes: 752
        },
        {
          date: '2018-11-01',
          totalMinutes: 478
        },
        {
          date: '2018-11-02',
          totalMinutes: 470
        },
        {
          date: '2018-11-03',
          totalMinutes: 88
        },
        {
          date: '2018-11-04',
          totalMinutes: 915
        }
      ],
      dateMinutesCount: 7
    },
    positionType: 'P',
    qualifications: {
      qualification: [
        {
          dateTimeType: 'GMT',
          qualificationID: 'QU-SEAT-B777-200-CA',
          expirationDateTime: '2018-12-20T00:00:00.000+0000'
        },
        {
          dateTimeType: 'GMT',
          qualificationID: 'QU-SEAT-B777-200-FO',
          expirationDateTime: '2018-12-20T00:00:00.000+0000'
        }
      ],
      qualificationCount: 2
    },
    blockHistorySummaryList: {
      blockSummary: [
        {
          endDate: '2018-10-25',
          startDate: '2018-10-25',
          totalMinutes: 783
        },
        {
          endDate: '2018-10-26',
          startDate: '2018-10-26',
          totalMinutes: 25
        },
        {
          endDate: '2018-10-27',
          startDate: '2018-10-27',
          totalMinutes: 752
        },
        {
          endDate: '2018-11-01',
          startDate: '2018-11-01',
          totalMinutes: 478
        },
        {
          endDate: '2018-11-02',
          startDate: '2018-11-02',
          totalMinutes: 470
        },
        {
          endDate: '2018-11-03',
          startDate: '2018-11-03',
          totalMinutes: 88
        },
        {
          endDate: '2018-11-04',
          startDate: '2018-11-04',
          totalMinutes: 915
        }
      ],
      blockSummaryCount: 7
    }
  },
  {
    name: 'SOMOGYI, LASZLO',
    crewID: 'CR-0064D',
    version: 1,
    bidPeriods: {
      bidPeriod: [
        {
          code: '1005',
          baseID: 'CB-E',
          seniority: 535,
          startDate: '2018-10-22',
          positionID: 'PO-CA',
          mtdBlockTime: 4359,
          blockTimeDate: '2018-11-12',
          assignmentType: 'LINE_HOLDER'
        },
        {
          code: '1006',
          baseID: 'CB-E',
          seniority: 535,
          startDate: '2018-11-21',
          positionID: 'PO-CA',
          mtdBlockTime: 0,
          assignmentType: 'LINE_HOLDER'
        }
      ],
      bidPeriodCount: 2
    },
    employeeID: '0064D',
    identifier: 'CR-0064D',
    blockHistory: {
      dateMinutes: [
        {
          date: '2018-10-12',
          totalMinutes: 779
        },
        {
          date: '2018-10-13',
          totalMinutes: 111
        },
        {
          date: '2018-10-14',
          totalMinutes: 886
        },
        {
          date: '2018-10-24',
          totalMinutes: 318
        },
        {
          date: '2018-10-25',
          totalMinutes: 129
        },
        {
          date: '2018-10-26',
          totalMinutes: 558
        },
        {
          date: '2018-10-27',
          totalMinutes: 445
        },
        {
          date: '2018-10-28',
          totalMinutes: 267
        },
        {
          date: '2018-10-29',
          totalMinutes: 771
        },
        {
          date: '2018-11-08',
          totalMinutes: 518
        },
        {
          date: '2018-11-09',
          totalMinutes: 446
        },
        {
          date: '2018-11-10',
          totalMinutes: 100
        },
        {
          date: '2018-11-11',
          totalMinutes: 807
        }
      ],
      dateMinutesCount: 13
    },
    positionType: 'P',
    qualifications: {
      qualification: [
        {
          dateTimeType: 'GMT',
          qualificationID: 'QU-SEAT-B777-200-CA',
          expirationDateTime: '2019-01-12T00:00:00.000+0000'
        },
        {
          dateTimeType: 'GMT',
          qualificationID: 'QU-SEAT-B777-200-FO',
          expirationDateTime: '2019-01-12T00:00:00.000+0000'
        }
      ],
      qualificationCount: 2
    },
    blockHistorySummaryList: {
      blockSummary: [
        {
          endDate: '2018-10-12',
          startDate: '2018-10-12',
          totalMinutes: 779
        },
        {
          endDate: '2018-10-13',
          startDate: '2018-10-13',
          totalMinutes: 111
        },
        {
          endDate: '2018-10-14',
          startDate: '2018-10-14',
          totalMinutes: 886
        },
        {
          endDate: '2018-10-24',
          startDate: '2018-10-24',
          totalMinutes: 318
        },
        {
          endDate: '2018-10-25',
          startDate: '2018-10-25',
          totalMinutes: 129
        },
        {
          endDate: '2018-10-26',
          startDate: '2018-10-26',
          totalMinutes: 558
        },
        {
          endDate: '2018-10-27',
          startDate: '2018-10-27',
          totalMinutes: 445
        },
        {
          endDate: '2018-10-28',
          startDate: '2018-10-28',
          totalMinutes: 267
        },
        {
          endDate: '2018-10-29',
          startDate: '2018-10-29',
          totalMinutes: 771
        },
        {
          endDate: '2018-11-08',
          startDate: '2018-11-08',
          totalMinutes: 518
        },
        {
          endDate: '2018-11-09',
          startDate: '2018-11-09',
          totalMinutes: 446
        },
        {
          endDate: '2018-11-10',
          startDate: '2018-11-10',
          totalMinutes: 100
        },
        {
          endDate: '2018-11-11',
          startDate: '2018-11-11',
          totalMinutes: 807
        }
      ],
      blockSummaryCount: 13
    }
  },
  {
    name: 'FRAZIER, DEDE',
    crewID: 'CR-0881N',
    version: 1,
    bidPeriods: {
      bidPeriod: [
        {
          code: '1005',
          baseID: 'CB-H',
          seniority: 1185,
          startDate: '2018-10-22',
          positionID: 'PO-FO',
          mtdBlockTime: 2758,
          blockTimeDate: '2018-11-08',
          assignmentType: 'LINE_HOLDER',
          pairingAssignments: {
            pairingAssignment: [
              {
                isReserve: false,
                pairingID: 'PA-CO--P--H5057--2010-05-24',
                positionID: 'PO-FO',
                isRequested: false,
                subpositionID: 'FO01',
                isRoutedTogether: false
              }
            ],
            pairingAssignmentCount: 1
          }
        },
        {
          code: '1006',
          baseID: 'CB-H',
          seniority: 1185,
          startDate: '2018-11-21',
          positionID: 'PO-FO',
          mtdBlockTime: 0,
          assignmentType: 'LINE_HOLDER'
        }
      ],
      bidPeriodCount: 2
    },
    employeeID: '0881N',
    identifier: 'CR-0881N',
    blockHistory: {
      dateMinutes: [
        {
          date: '2018-10-17',
          totalMinutes: 452
        },
        {
          date: '2018-10-18',
          totalMinutes: 454
        },
        {
          date: '2018-10-22',
          totalMinutes: 442
        },
        {
          date: '2018-10-29',
          totalMinutes: 449
        },
        {
          date: '2018-10-30',
          totalMinutes: 449
        },
        {
          date: '2018-11-05',
          totalMinutes: 473
        },
        {
          date: '2018-11-06',
          totalMinutes: 463
        },
        {
          date: '2018-11-07',
          totalMinutes: 482
        }
      ],
      dateMinutesCount: 8
    },
    positionType: 'P',
    qualifications: {
      qualification: [
        {
          dateTimeType: 'GMT',
          qualificationID: 'QU-SEAT-B737-300-FO',
          expirationDateTime: '2019-02-04T00:00:00.000+0000'
        },
        {
          dateTimeType: 'GMT',
          qualificationID: 'QU-SEAT-B737-500-FO',
          expirationDateTime: '2019-02-04T00:00:00.000+0000'
        },
        {
          dateTimeType: 'GMT',
          qualificationID: 'QU-SEAT-B737-700-FO',
          expirationDateTime: '2019-02-04T00:00:00.000+0000'
        },
        {
          dateTimeType: 'GMT',
          qualificationID: 'QU-SEAT-B737-800-FO',
          expirationDateTime: '2019-02-04T00:00:00.000+0000'
        },
        {
          dateTimeType: 'GMT',
          qualificationID: 'QU-SEAT-B737-900-FO',
          expirationDateTime: '2019-02-04T00:00:00.000+0000'
        }
      ],
      qualificationCount: 5
    },
    blockHistorySummaryList: {
      blockSummary: [
        {
          endDate: '2018-10-17',
          startDate: '2018-10-17',
          totalMinutes: 452
        },
        {
          endDate: '2018-10-18',
          startDate: '2018-10-18',
          totalMinutes: 454
        },
        {
          endDate: '2018-10-22',
          startDate: '2018-10-22',
          totalMinutes: 442
        },
        {
          endDate: '2018-10-29',
          startDate: '2018-10-29',
          totalMinutes: 449
        },
        {
          endDate: '2018-10-30',
          startDate: '2018-10-30',
          totalMinutes: 449
        },
        {
          endDate: '2018-11-05',
          startDate: '2018-11-05',
          totalMinutes: 473
        },
        {
          endDate: '2018-11-06',
          startDate: '2018-11-06',
          totalMinutes: 463
        },
        {
          endDate: '2018-11-07',
          startDate: '2018-11-07',
          totalMinutes: 482
        }
      ],
      blockSummaryCount: 8
    }
  }
];

export const crewBaseMock = [
  {
    code: 'GML',
    name: 'GML,Guam,Guam',
    baseID: 'CB-A',
    version: 1,
    identifier: 'CB-A',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-GUM'
        }
      ],
      baseAirportCount: 1
    },
    reserveCriteriaList: {
      reserveCriteria: [
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B737-300'
              },
              {
                fleetID: 'FE-B737-500'
              },
              {
                fleetID: 'FE-B737-700'
              },
              {
                fleetID: 'FE-B737-800'
              },
              {
                fleetID: 'FE-B737-900'
              },
              {
                fleetID: 'FE-B757-200'
              },
              {
                fleetID: 'FE-B757-300'
              },
              {
                fleetID: 'FE-B767-200'
              },
              {
                fleetID: 'FE-B767-400'
              },
              {
                fleetID: 'FE-B777-200'
              }
            ],
            fleetRefCount: 10
          },
          properties: {
            property: [
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 1
          },
          positionType: 'F'
        }
      ],
      reserveCriteriaCount: 1
    }
  },
  {
    code: 'CLE',
    name: 'CLE,Cleveland,US',
    baseID: 'CB-C',
    version: 1,
    identifier: 'CB-C',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-CLE'
        }
      ],
      baseAirportCount: 1
    }
  },
  {
    code: 'EWR',
    name: 'EWR,Newark,US',
    baseID: 'CB-E',
    version: 1,
    identifier: 'CB-E',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-EWR'
        }
      ],
      baseAirportCount: 1
    },
    reserveCriteriaList: {
      reserveCriteria: [
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B737-300'
              },
              {
                fleetID: 'FE-B737-500'
              },
              {
                fleetID: 'FE-B737-700'
              },
              {
                fleetID: 'FE-B737-800'
              },
              {
                fleetID: 'FE-B737-900'
              },
              {
                fleetID: 'FE-B757-200'
              },
              {
                fleetID: 'FE-B757-300'
              },
              {
                fleetID: 'FE-B767-200'
              },
              {
                fleetID: 'FE-B767-400'
              },
              {
                fleetID: 'FE-B777-200'
              }
            ],
            fleetRefCount: 10
          },
          properties: {
            property: [
              {
                name: 'DOMESTIC',
                value: 'true'
              },
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 2
          },
          positionType: 'P'
        },
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B737-300'
              },
              {
                fleetID: 'FE-B737-500'
              },
              {
                fleetID: 'FE-B737-700'
              },
              {
                fleetID: 'FE-B737-800'
              },
              {
                fleetID: 'FE-B737-900'
              },
              {
                fleetID: 'FE-B757-200'
              },
              {
                fleetID: 'FE-B757-300'
              },
              {
                fleetID: 'FE-B767-200'
              },
              {
                fleetID: 'FE-B767-400'
              }
            ],
            fleetRefCount: 9
          },
          properties: {
            property: [
              {
                name: 'DOMESTIC',
                value: 'true'
              },
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 2
          },
          positionType: 'F'
        }
      ],
      reserveCriteriaCount: 2
    }
  },
  {
    code: 'GUM',
    name: 'GUM,Guam,Guam',
    baseID: 'CB-G',
    version: 1,
    identifier: 'CB-G',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-GUM'
        }
      ],
      baseAirportCount: 1
    },
    reserveCriteriaList: {
      reserveCriteria: [
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B737-300'
              },
              {
                fleetID: 'FE-B737-500'
              },
              {
                fleetID: 'FE-B737-700'
              },
              {
                fleetID: 'FE-B737-800'
              },
              {
                fleetID: 'FE-B737-900'
              }
            ],
            fleetRefCount: 5
          },
          properties: {
            property: [
              {
                name: 'DOMESTIC',
                value: 'true'
              },
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 2
          },
          positionType: 'P'
        },
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B737-300'
              },
              {
                fleetID: 'FE-B737-500'
              },
              {
                fleetID: 'FE-B737-700'
              },
              {
                fleetID: 'FE-B737-800'
              },
              {
                fleetID: 'FE-B737-900'
              },
              {
                fleetID: 'FE-B767-200'
              },
              {
                fleetID: 'FE-B767-400'
              }
            ],
            fleetRefCount: 7
          },
          properties: {
            property: [
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 1
          },
          positionType: 'F'
        }
      ],
      reserveCriteriaCount: 2
    }
  },
  {
    code: 'IAH',
    name: 'IAH,Houston,US',
    baseID: 'CB-H',
    version: 1,
    identifier: 'CB-H',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-IAH'
        }
      ],
      baseAirportCount: 1
    },
    reserveCriteriaList: {
      reserveCriteria: [
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B737-300'
              },
              {
                fleetID: 'FE-B737-500'
              },
              {
                fleetID: 'FE-B737-700'
              },
              {
                fleetID: 'FE-B737-800'
              },
              {
                fleetID: 'FE-B737-900'
              },
              {
                fleetID: 'FE-B757-200'
              },
              {
                fleetID: 'FE-B757-300'
              },
              {
                fleetID: 'FE-B767-200'
              },
              {
                fleetID: 'FE-B767-400'
              }
            ],
            fleetRefCount: 9
          },
          properties: {
            property: [
              {
                name: 'DOMESTIC',
                value: 'true'
              },
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 2
          },
          positionType: 'F'
        },
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B737-300'
              },
              {
                fleetID: 'FE-B737-500'
              },
              {
                fleetID: 'FE-B737-700'
              },
              {
                fleetID: 'FE-B737-800'
              },
              {
                fleetID: 'FE-B737-900'
              },
              {
                fleetID: 'FE-B757-200'
              },
              {
                fleetID: 'FE-B757-300'
              },
              {
                fleetID: 'FE-B767-200'
              },
              {
                fleetID: 'FE-B767-400'
              },
              {
                fleetID: 'FE-B777-200'
              }
            ],
            fleetRefCount: 10
          },
          properties: {
            property: [
              {
                name: 'DOMESTIC',
                value: 'true'
              },
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 2
          },
          positionType: 'P'
        }
      ],
      reserveCriteriaCount: 2
    }
  },
  {
    code: 'IAH',
    name: 'IAH,Houston,US',
    baseID: 'CB-I',
    version: 1,
    identifier: 'CB-I',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-IAH'
        }
      ],
      baseAirportCount: 1
    }
  },
  {
    code: 'NRT',
    name: 'NRT,Narita,Japan',
    baseID: 'CB-J',
    version: 1,
    identifier: 'CB-J',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-NRT'
        }
      ],
      baseAirportCount: 1
    },
    reserveCriteriaList: {
      reserveCriteria: [
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B737-300'
              },
              {
                fleetID: 'FE-B737-500'
              },
              {
                fleetID: 'FE-B737-700'
              },
              {
                fleetID: 'FE-B737-800'
              },
              {
                fleetID: 'FE-B737-900'
              },
              {
                fleetID: 'FE-B767-200'
              },
              {
                fleetID: 'FE-B767-400'
              },
              {
                fleetID: 'FE-B777-200'
              }
            ],
            fleetRefCount: 8
          },
          properties: {
            property: [
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 1
          },
          positionType: 'F'
        }
      ],
      reserveCriteriaCount: 1
    }
  },
  {
    code: 'HOS',
    name: 'HOS,Houston,US',
    baseID: 'CB-K',
    version: 1,
    identifier: 'CB-K',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-IAH'
        }
      ],
      baseAirportCount: 1
    },
    reserveCriteriaList: {
      reserveCriteria: [
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B737-300'
              },
              {
                fleetID: 'FE-B737-500'
              },
              {
                fleetID: 'FE-B737-700'
              },
              {
                fleetID: 'FE-B737-800'
              },
              {
                fleetID: 'FE-B737-900'
              },
              {
                fleetID: 'FE-B757-200'
              },
              {
                fleetID: 'FE-B757-300'
              },
              {
                fleetID: 'FE-B767-200'
              },
              {
                fleetID: 'FE-B767-400'
              },
              {
                fleetID: 'FE-B777-200'
              }
            ],
            fleetRefCount: 10
          },
          properties: {
            property: [
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 1
          },
          positionType: 'F'
        }
      ],
      reserveCriteriaCount: 1
    }
  },
  {
    code: 'LAX',
    name: 'LAX,Los Angeles,US',
    baseID: 'CB-L',
    version: 1,
    identifier: 'CB-L',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-LAX'
        }
      ],
      baseAirportCount: 1
    }
  },
  {
    code: 'TRI',
    name: 'TRI,Houston,US',
    baseID: 'CB-Q',
    version: 1,
    identifier: 'CB-Q',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-IAH'
        }
      ],
      baseAirportCount: 1
    }
  },
  {
    code: 'CTA',
    name: 'CTA,Cleveland,US',
    baseID: 'CB-R',
    version: 1,
    identifier: 'CB-R',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-CLE'
        }
      ],
      baseAirportCount: 1
    },
    reserveCriteriaList: {
      reserveCriteria: [
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B737-300'
              },
              {
                fleetID: 'FE-B737-500'
              },
              {
                fleetID: 'FE-B737-700'
              },
              {
                fleetID: 'FE-B737-800'
              },
              {
                fleetID: 'FE-B737-900'
              }
            ],
            fleetRefCount: 5
          },
          properties: {
            property: [
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 1
          },
          positionType: 'F'
        }
      ],
      reserveCriteriaCount: 1
    }
  },
  {
    code: 'HTA',
    name: 'HTA,Houston,US',
    baseID: 'CB-T',
    version: 1,
    identifier: 'CB-T',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-IAH'
        }
      ],
      baseAirportCount: 1
    },
    reserveCriteriaList: {
      reserveCriteria: [
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B757-200'
              },
              {
                fleetID: 'FE-B757-300'
              },
              {
                fleetID: 'FE-B767-200'
              },
              {
                fleetID: 'FE-B767-400'
              }
            ],
            fleetRefCount: 4
          },
          properties: {
            property: [
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 1
          },
          positionType: 'F'
        },
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B777-200'
              }
            ],
            fleetRefCount: 1
          },
          properties: {
            property: [
              {
                name: 'DOMESTIC',
                value: 'true'
              },
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 2
          },
          positionType: 'F'
        }
      ],
      reserveCriteriaCount: 2
    }
  },
  {
    code: 'CLE',
    name: 'CLE,Cleveland,US',
    baseID: 'CB-V',
    version: 1,
    identifier: 'CB-V',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-CLE'
        }
      ],
      baseAirportCount: 1
    },
    reserveCriteriaList: {
      reserveCriteria: [
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B737-300'
              },
              {
                fleetID: 'FE-B737-500'
              },
              {
                fleetID: 'FE-B737-700'
              },
              {
                fleetID: 'FE-B737-800'
              },
              {
                fleetID: 'FE-B737-900'
              }
            ],
            fleetRefCount: 5
          },
          properties: {
            property: [
              {
                name: 'DOMESTIC',
                value: 'true'
              },
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 2
          },
          positionType: 'P'
        },
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B737-300'
              },
              {
                fleetID: 'FE-B737-500'
              },
              {
                fleetID: 'FE-B737-700'
              },
              {
                fleetID: 'FE-B737-800'
              },
              {
                fleetID: 'FE-B737-900'
              }
            ],
            fleetRefCount: 5
          },
          properties: {
            property: [
              {
                name: 'DOMESTIC',
                value: 'true'
              }
            ],
            propertyCount: 1
          },
          positionType: 'F'
        }
      ],
      reserveCriteriaCount: 2
    }
  },
  {
    code: 'NLS',
    name: 'NLS,Newark,US',
    baseID: 'CB-X',
    version: 1,
    identifier: 'CB-X',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-EWR'
        }
      ],
      baseAirportCount: 1
    },
    reserveCriteriaList: {
      reserveCriteria: [
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B737-300'
              },
              {
                fleetID: 'FE-B737-500'
              },
              {
                fleetID: 'FE-B737-700'
              },
              {
                fleetID: 'FE-B737-800'
              },
              {
                fleetID: 'FE-B737-900'
              },
              {
                fleetID: 'FE-B757-200'
              },
              {
                fleetID: 'FE-B757-300'
              },
              {
                fleetID: 'FE-B767-200'
              },
              {
                fleetID: 'FE-B767-400'
              },
              {
                fleetID: 'FE-B777-200'
              }
            ],
            fleetRefCount: 10
          },
          properties: {
            property: [
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 1
          },
          positionType: 'F'
        }
      ],
      reserveCriteriaCount: 1
    }
  },
  {
    code: 'NTA',
    name: 'NTA,Newark,US',
    baseID: 'CB-Y',
    version: 1,
    identifier: 'CB-Y',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-EWR'
        }
      ],
      baseAirportCount: 1
    },
    reserveCriteriaList: {
      reserveCriteria: [
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B757-200'
              },
              {
                fleetID: 'FE-B757-300'
              },
              {
                fleetID: 'FE-B767-200'
              },
              {
                fleetID: 'FE-B767-400'
              }
            ],
            fleetRefCount: 4
          },
          properties: {
            property: [
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 1
          },
          positionType: 'F'
        },
        {
          fleets: {
            fleetRef: [
              {
                fleetID: 'FE-B777-200'
              }
            ],
            fleetRefCount: 1
          },
          properties: {
            property: [
              {
                name: 'DOMESTIC',
                value: 'true'
              },
              {
                name: 'INTERNATIONAL',
                value: 'true'
              }
            ],
            propertyCount: 2
          },
          positionType: 'F'
        }
      ],
      reserveCriteriaCount: 2
    }
  },
  {
    code: 'CKP',
    name: 'CKP,Houston,US',
    baseID: 'CB-Z',
    version: 1,
    identifier: 'CB-Z',
    baseAirports: {
      baseAirport: [
        {
          airportID: 'AP-IAH'
        }
      ],
      baseAirportCount: 1
    }
  }
];

export const fleetCompatibilityMock = [
  {
    fleetID: 'FE-B737-300',
    version: 1,
    identifier: 'FC-B737-300-CAB',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        },
        {
          fleetID: 'FE-B777-200',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 10
    },
    fleetCompatibilityID: 'FC-B737-300-CAB',
    fleetCompatibilityType: 'CABIN'
  },
  {
    fleetID: 'FE-B737-300',
    version: 1,
    identifier: 'FC-B737-300-COC',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 4
    },
    fleetCompatibilityID: 'FC-B737-300-COC',
    fleetCompatibilityType: 'COCKPIT'
  },
  {
    fleetID: 'FE-B737-300',
    version: 1,
    identifier: 'FC-B737-300-OPS',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 4
    },
    fleetCompatibilityID: 'FC-B737-300-OPS',
    fleetCompatibilityType: 'OPERATIONS'
  },
  {
    fleetID: 'FE-B737-500',
    version: 1,
    identifier: 'FC-B737-500-CAB',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        },
        {
          fleetID: 'FE-B777-200',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 10
    },
    fleetCompatibilityID: 'FC-B737-500-CAB',
    fleetCompatibilityType: 'CABIN'
  },
  {
    fleetID: 'FE-B737-500',
    version: 1,
    identifier: 'FC-B737-500-COC',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 4
    },
    fleetCompatibilityID: 'FC-B737-500-COC',
    fleetCompatibilityType: 'COCKPIT'
  },
  {
    fleetID: 'FE-B737-500',
    version: 1,
    identifier: 'FC-B737-500-OPS',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 4
    },
    fleetCompatibilityID: 'FC-B737-500-OPS',
    fleetCompatibilityType: 'OPERATIONS'
  },
  {
    fleetID: 'FE-B737-700',
    version: 1,
    identifier: 'FC-B737-700-CAB',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        },
        {
          fleetID: 'FE-B777-200',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 10
    },
    fleetCompatibilityID: 'FC-B737-700-CAB',
    fleetCompatibilityType: 'CABIN'
  },
  {
    fleetID: 'FE-B737-700',
    version: 1,
    identifier: 'FC-B737-700-COC',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 4
    },
    fleetCompatibilityID: 'FC-B737-700-COC',
    fleetCompatibilityType: 'COCKPIT'
  },
  {
    fleetID: 'FE-B737-700',
    version: 1,
    identifier: 'FC-B737-700-OPS',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 4
    },
    fleetCompatibilityID: 'FC-B737-700-OPS',
    fleetCompatibilityType: 'OPERATIONS'
  },
  {
    fleetID: 'FE-B737-800',
    version: 1,
    identifier: 'FC-B737-800-CAB',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        },
        {
          fleetID: 'FE-B777-200',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 10
    },
    fleetCompatibilityID: 'FC-B737-800-CAB',
    fleetCompatibilityType: 'CABIN'
  },
  {
    fleetID: 'FE-B737-800',
    version: 1,
    identifier: 'FC-B737-800-COC',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 4
    },
    fleetCompatibilityID: 'FC-B737-800-COC',
    fleetCompatibilityType: 'COCKPIT'
  },
  {
    fleetID: 'FE-B737-800',
    version: 1,
    identifier: 'FC-B737-800-OPS',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 4
    },
    fleetCompatibilityID: 'FC-B737-800-OPS',
    fleetCompatibilityType: 'OPERATIONS'
  },
  {
    fleetID: 'FE-B737-900',
    version: 1,
    identifier: 'FC-B737-900-CAB',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        },
        {
          fleetID: 'FE-B777-200',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 10
    },
    fleetCompatibilityID: 'FC-B737-900-CAB',
    fleetCompatibilityType: 'CABIN'
  },
  {
    fleetID: 'FE-B737-900',
    version: 1,
    identifier: 'FC-B737-900-COC',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 4
    },
    fleetCompatibilityID: 'FC-B737-900-COC',
    fleetCompatibilityType: 'COCKPIT'
  },
  {
    fleetID: 'FE-B737-900',
    version: 1,
    identifier: 'FC-B737-900-OPS',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 4
    },
    fleetCompatibilityID: 'FC-B737-900-OPS',
    fleetCompatibilityType: 'OPERATIONS'
  },
  {
    fleetID: 'FE-B757-200',
    version: 1,
    identifier: 'FC-B757-200-CAB',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        },
        {
          fleetID: 'FE-B777-200',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 10
    },
    fleetCompatibilityID: 'FC-B757-200-CAB',
    fleetCompatibilityType: 'CABIN'
  },
  {
    fleetID: 'FE-B757-200',
    version: 1,
    identifier: 'FC-B757-200-COC',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 3
    },
    fleetCompatibilityID: 'FC-B757-200-COC',
    fleetCompatibilityType: 'COCKPIT'
  },
  {
    fleetID: 'FE-B757-200',
    version: 1,
    identifier: 'FC-B757-200-OPS',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 3
    },
    fleetCompatibilityID: 'FC-B757-200-OPS',
    fleetCompatibilityType: 'OPERATIONS'
  },
  {
    fleetID: 'FE-B757-300',
    version: 1,
    identifier: 'FC-B757-300-CAB',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        },
        {
          fleetID: 'FE-B777-200',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 10
    },
    fleetCompatibilityID: 'FC-B757-300-CAB',
    fleetCompatibilityType: 'CABIN'
  },
  {
    fleetID: 'FE-B757-300',
    version: 1,
    identifier: 'FC-B757-300-COC',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 3
    },
    fleetCompatibilityID: 'FC-B757-300-COC',
    fleetCompatibilityType: 'COCKPIT'
  },
  {
    fleetID: 'FE-B757-300',
    version: 1,
    identifier: 'FC-B757-300-OPS',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 3
    },
    fleetCompatibilityID: 'FC-B757-300-OPS',
    fleetCompatibilityType: 'OPERATIONS'
  },
  {
    fleetID: 'FE-B767-200',
    version: 1,
    identifier: 'FC-B767-200-CAB',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        },
        {
          fleetID: 'FE-B777-200',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 10
    },
    fleetCompatibilityID: 'FC-B767-200-CAB',
    fleetCompatibilityType: 'CABIN'
  },
  {
    fleetID: 'FE-B767-200',
    version: 1,
    identifier: 'FC-B767-200-COC',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 3
    },
    fleetCompatibilityID: 'FC-B767-200-COC',
    fleetCompatibilityType: 'COCKPIT'
  },
  {
    fleetID: 'FE-B767-200',
    version: 1,
    identifier: 'FC-B767-200-OPS',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 3
    },
    fleetCompatibilityID: 'FC-B767-200-OPS',
    fleetCompatibilityType: 'OPERATIONS'
  },
  {
    fleetID: 'FE-B767-400',
    version: 1,
    identifier: 'FC-B767-400-CAB',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        },
        {
          fleetID: 'FE-B777-200',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 10
    },
    fleetCompatibilityID: 'FC-B767-400-CAB',
    fleetCompatibilityType: 'CABIN'
  },
  {
    fleetID: 'FE-B767-400',
    version: 1,
    identifier: 'FC-B767-400-COC',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 3
    },
    fleetCompatibilityID: 'FC-B767-400-COC',
    fleetCompatibilityType: 'COCKPIT'
  },
  {
    fleetID: 'FE-B767-400',
    version: 1,
    identifier: 'FC-B767-400-OPS',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 3
    },
    fleetCompatibilityID: 'FC-B767-400-OPS',
    fleetCompatibilityType: 'OPERATIONS'
  },
  {
    fleetID: 'FE-B777-200',
    version: 1,
    identifier: 'FC-B777-200-CAB',
    compatibleFleets: {
      compatibleFleet: [
        {
          fleetID: 'FE-B737-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-500',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-700',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-800',
          swapCost: 100
        },
        {
          fleetID: 'FE-B737-900',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B757-300',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-200',
          swapCost: 100
        },
        {
          fleetID: 'FE-B767-400',
          swapCost: 100
        },
        {
          fleetID: 'FE-B777-200',
          swapCost: 100
        }
      ],
      compatibleFleetCount: 10
    },
    fleetCompatibilityID: 'FC-B777-200-CAB',
    fleetCompatibilityType: 'CABIN'
  },
  {
    fleetID: 'FE-B777-200',
    version: 1,
    identifier: 'FC-B777-200-COC',
    fleetCompatibilityID: 'FC-B777-200-COC',
    fleetCompatibilityType: 'COCKPIT'
  },
  {
    fleetID: 'FE-B777-200',
    version: 1,
    identifier: 'FC-B777-200-OPS',
    fleetCompatibilityID: 'FC-B777-200-OPS',
    fleetCompatibilityType: 'OPERATIONS'
  }
];

export const flightMock = [
  {
    cost: 7547,
    revenue: 0.10696174457218899,
    version: 1,
    flightID: 'FL-CO-20181107-NRT-GUM-7',
    inControl: true,
    aircraftID: 'AC-0201',
    identifier: 'FL-CO--0007--20100523--NRT--GUM--0',
    isCanceled: false,
    onDateTime: '2018-11-07T10:11:00.000+0000',
    subfleetID: 'SF-73M155',
    canDeadHead: true,
    carrierCode: 'CO',
    flightClass: 'MAINLINE',
    offDateTime: '2018-11-07T07:20:00.000+0000',
    serviceType: 'J',
    flightNumber: '0007',
    revenueScore: 44610,
    destAirportID: 'AP-GUM',
    onDateTimeEst: '2018-11-07T10:10:00.000+0000',
    operationDate: '2018-11-07',
    origAirportID: 'AP-NRT',
    arrDateTimeAct: '2018-11-07T10:30:00.000+0000',
    arrDateTimeSch: '2018-11-07T10:30:00.000+0000',
    dptDateTimeAct: '2018-11-07T06:50:00.000+0000',
    dptDateTimeSch: '2018-11-07T06:50:00.000+0000',
    offDateTimeEst: '2018-11-07T07:19:00.000+0000',
    passengerCounts: {
      passengerCount: [
        {
          count: 0,
          passengerType: 'THROUGH'
        },
        {
          count: 3,
          passengerType: 'CONNECTING'
        }
      ],
      passengerCountCount: 2
    },
    compartmentCounts: {
      compartmentCount: [
        {
          count: 14,
          compartment: 'FIRST'
        },
        {
          count: 123,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    multiDepartureCode: '0',
    cabinComplementOverride: {
      cabinPositionCount: [
        {
          count: 1,
          positionID: 'PO-FA',
          subpositionID: 'FM01'
        },
        {
          count: 3,
          positionID: 'PO-FA'
        }
      ],
      cabinPositionCountCount: 2
    },
    crewCriticalOffDateTime: '2018-11-07T13:10:00.000+0000'
  },
  {
    cost: 7547,
    revenue: 0.09592749331638953,
    version: 1,
    flightID: 'FL-CO-20181107-SAN-IAH-1606',
    inControl: true,
    aircraftID: 'AC-0293',
    identifier: 'FL-CO--1606--20100523--SAN--IAH--0',
    isCanceled: false,
    onDateTime: '2018-11-07T19:28:00.000+0000',
    subfleetID: 'SF-738160',
    canDeadHead: true,
    carrierCode: 'CO',
    flightClass: 'MAINLINE',
    offDateTime: '2018-11-07T17:35:00.000+0000',
    serviceType: 'J',
    flightNumber: '1606',
    revenueScore: 40008,
    destAirportID: 'AP-IAH',
    onDateTimeEst: '2018-11-07T19:27:00.000+0000',
    operationDate: '2018-11-07',
    origAirportID: 'AP-SAN',
    arrDateTimeAct: '2018-11-07T19:48:00.000+0000',
    arrDateTimeSch: '2018-11-07T19:48:00.000+0000',
    dptDateTimeAct: '2018-11-07T16:45:00.000+0000',
    dptDateTimeSch: '2018-11-07T16:45:00.000+0000',
    offDateTimeEst: '2018-11-07T17:02:00.000+0000',
    passengerCounts: {
      passengerCount: [
        {
          count: 0,
          passengerType: 'THROUGH'
        },
        {
          count: 50,
          passengerType: 'CONNECTING'
        }
      ],
      passengerCountCount: 2
    },
    compartmentCounts: {
      compartmentCount: [
        {
          count: 16,
          compartment: 'FIRST'
        },
        {
          count: 140,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    multiDepartureCode: '0',
    cabinComplementOverride: {
      cabinPositionCount: [
        {
          count: 1,
          positionID: 'PO-FA',
          subpositionID: 'FM01'
        },
        {
          count: 3,
          positionID: 'PO-FA'
        }
      ],
      cabinPositionCountCount: 2
    },
    crewCriticalOffDateTime: '2018-11-08T05:11:00.000+0000'
  },
  {
    cost: 7547,
    revenue: 0.07361682231786412,
    version: 1,
    flightID: 'FL-CO-20181107-EWR-SJD-1608',
    inControl: true,
    aircraftID: 'AC-0241',
    identifier: 'FL-CO--1608--20100523--EWR--SJD--0',
    isCanceled: false,
    onDateTime: '2018-11-07T19:36:00.000+0000',
    subfleetID: 'SF-738160',
    canDeadHead: true,
    carrierCode: 'CO',
    flightClass: 'MAINLINE',
    offDateTime: '2018-11-07T14:14:00.000+0000',
    serviceType: 'J',
    flightNumber: '1608',
    revenueScore: 30703,
    destAirportID: 'AP-SJD',
    onDateTimeEst: '2018-11-07T19:35:00.000+0000',
    operationDate: '2018-11-07',
    origAirportID: 'AP-EWR',
    arrDateTimeAct: '2018-11-07T19:50:00.000+0000',
    arrDateTimeSch: '2018-11-07T19:50:00.000+0000',
    dptDateTimeAct: '2018-11-07T14:00:00.000+0000',
    dptDateTimeSch: '2018-11-07T14:00:00.000+0000',
    offDateTimeEst: '2018-11-07T14:13:00.000+0000',
    passengerCounts: {
      passengerCount: [
        {
          count: 0,
          passengerType: 'THROUGH'
        },
        {
          count: 0,
          passengerType: 'CONNECTING'
        }
      ],
      passengerCountCount: 2
    },
    compartmentCounts: {
      compartmentCount: [
        {
          count: 15,
          compartment: 'FIRST'
        },
        {
          count: 134,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    multiDepartureCode: '0',
    cabinComplementOverride: {
      cabinPositionCount: [
        {
          count: 1,
          positionID: 'PO-FA',
          subpositionID: 'FM01'
        },
        {
          count: 3,
          positionID: 'PO-FA'
        }
      ],
      cabinPositionCountCount: 2
    },
    crewCriticalOffDateTime: '2018-11-07T23:16:00.000+0000',
    cockpitComplementOverride: {
      cockpitPositionCount: [
        {
          count: 1,
          positionID: 'PO-CA'
        },
        {
          count: 2,
          positionID: 'PO-FO'
        }
      ],
      cockpitPositionCountCount: 2
    }
  },
  {
    cost: 7547,
    revenue: 0.04835936844376776,
    version: 1,
    flightID: 'FL-CO-20181107-EWR-MEX-1736',
    inControl: true,
    aircraftID: 'AC-0264',
    identifier: 'FL-CO--1736--20100523--EWR--MEX--0',
    isCanceled: false,
    onDateTime: '2018-11-07T17:30:00.000+0000',
    subfleetID: 'SF-73X152',
    canDeadHead: true,
    carrierCode: 'CO',
    flightClass: 'MAINLINE',
    offDateTime: '2018-11-07T12:37:00.000+0000',
    serviceType: 'J',
    flightNumber: '1736',
    revenueScore: 20169,
    destAirportID: 'AP-MEX',
    onDateTimeEst: '2018-11-07T17:29:00.000+0000',
    operationDate: '2018-11-07',
    origAirportID: 'AP-EWR',
    arrDateTimeAct: '2018-11-07T17:45:00.000+0000',
    arrDateTimeSch: '2018-11-07T17:45:00.000+0000',
    dptDateTimeAct: '2018-11-07T12:30:00.000+0000',
    dptDateTimeSch: '2018-11-07T12:30:00.000+0000',
    offDateTimeEst: '2018-11-07T12:36:00.000+0000',
    passengerCounts: {
      passengerCount: [
        {
          count: 0,
          passengerType: 'THROUGH'
        },
        {
          count: 0,
          passengerType: 'CONNECTING'
        }
      ],
      passengerCountCount: 2
    },
    compartmentCounts: {
      compartmentCount: [
        {
          count: 14,
          compartment: 'FIRST'
        },
        {
          count: 45,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    multiDepartureCode: '0',
    cabinComplementOverride: {
      cabinPositionCount: [
        {
          count: 1,
          positionID: 'PO-FA',
          subpositionID: 'FM01'
        },
        {
          count: 3,
          positionID: 'PO-FA'
        }
      ],
      cabinPositionCountCount: 2
    },
    crewCriticalOffDateTime: '2018-11-07T22:52:00.000+0000'
  },
  {
    cost: 7547,
    revenue: 0.04430244686080107,
    version: 1,
    flightID: 'FL-CO-20181107-LGA-IAH-333',
    inControl: true,
    aircraftID: 'AC-0504',
    identifier: 'FL-CO--0333--20100523--LGA--IAH--0',
    isCanceled: false,
    onDateTime: '2018-11-07T15:52:00.000+0000',
    subfleetID: 'SF-738160',
    canDeadHead: true,
    carrierCode: 'CO',
    flightClass: 'MAINLINE',
    offDateTime: '2018-11-07T12:45:00.000+0000',
    serviceType: 'J',
    flightNumber: '0333',
    revenueScore: 18477,
    destAirportID: 'AP-IAH',
    onDateTimeEst: '2018-11-07T15:51:00.000+0000',
    operationDate: '2018-11-07',
    origAirportID: 'AP-LGA',
    arrDateTimeAct: '2018-11-07T16:10:00.000+0000',
    arrDateTimeEst: '2018-11-07T16:10:00.000+0000',
    arrDateTimeSch: '2018-11-07T14:30:00.000+0000',
    dptDateTimeAct: '2018-11-07T12:25:00.000+0000',
    dptDateTimeEst: '2018-11-07T12:25:00.000+0000',
    dptDateTimeSch: '2018-11-07T10:45:00.000+0000',
    offDateTimeEst: '2018-11-07T12:44:00.000+0000',
    passengerCounts: {
      passengerCount: [
        {
          count: 0,
          passengerType: 'THROUGH'
        },
        {
          count: 36,
          passengerType: 'CONNECTING'
        }
      ],
      passengerCountCount: 2
    },
    compartmentCounts: {
      compartmentCount: [
        {
          count: 15,
          compartment: 'FIRST'
        },
        {
          count: 87,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    multiDepartureCode: '0',
    cabinComplementOverride: {
      cabinPositionCount: [
        {
          count: 1,
          positionID: 'PO-FA',
          subpositionID: 'FM01'
        },
        {
          count: 3,
          positionID: 'PO-FA'
        }
      ],
      cabinPositionCountCount: 2
    },
    crewCriticalOffDateTime: '2018-11-07T22:37:00.000+0000'
  }
];

export const flightActivityMock = [
  {
    type: 'INITIAL_OPERATING_EXPERIENCE_ASSIGNMENT',
    roles: {
      role: [
        {
          role: 'TRAINER'
        },
        {
          role: 'TRAINEE'
        }
      ],
      roleCount: 2
    },
    version: 1,
    category: 'EQUIPMENT_TRAINING',
    identifier: 'FA-001',
    flightActivityID: 'FA-001'
  },
  {
    type: 'INITIAL_OPERATING_EXPERIENCE',
    roles: {
      role: [
        {
          role: 'TRAINER'
        },
        {
          role: 'TRAINEE'
        }
      ],
      roleCount: 2
    },
    version: 1,
    category: 'EQUIPMENT_TRAINING',
    identifier: 'FA-002',
    flightActivityID: 'FA-002'
  },
  {
    type: 'FAA_LINE_CHECK',
    roles: {
      role: [
        {
          role: 'TRAINER'
        },
        {
          role: 'TRAINEE'
        }
      ],
      roleCount: 2
    },
    version: 1,
    category: 'EQUIPMENT_TRAINING',
    identifier: 'FA-003',
    flightActivityID: 'FA-003'
  },
  {
    type: 'GROUND_PAIRING_ASSIGNMENT',
    roles: {
      role: [
        {
          role: 'TRAINER'
        },
        {
          role: 'TRAINEE'
        }
      ],
      roleCount: 2
    },
    version: 1,
    category: 'EQUIPMENT_TRAINING',
    identifier: 'FA-004',
    flightActivityID: 'FA-004'
  },
  {
    type: 'FINAL_LINE_CHECK_CA',
    roles: {
      role: [
        {
          role: 'TRAINER'
        },
        {
          role: 'TRAINEE'
        }
      ],
      roleCount: 2
    },
    version: 1,
    category: 'EQUIPMENT_TRAINING',
    identifier: 'FA-005',
    flightActivityID: 'FA-005'
  },
  {
    type: 'FINAL_LINE_CHECK_FO',
    roles: {
      role: [
        {
          role: 'TRAINER'
        },
        {
          role: 'TRAINEE'
        }
      ],
      roleCount: 2
    },
    version: 1,
    category: 'EQUIPMENT_TRAINING',
    identifier: 'FA-006',
    flightActivityID: 'FA-006'
  },
  {
    type: 'PROFICIENCY_OBSERVATION',
    roles: {
      role: [
        {
          role: 'TRAINER'
        }
      ],
      roleCount: 1
    },
    version: 1,
    category: 'EQUIPMENT_TRAINING',
    identifier: 'FA-007',
    flightActivityID: 'FA-007'
  }
];

export const interSegmentTimeMock = [];

export const maintenanceMock = [
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-HKG',
    aircraftID: 'AC-0005',
    identifier: 'MX-0005-2010-05-14-06-BSMX',
    endDateTime: '2018-11-24T23:00:00.000+0000',
    maintenanceID: 'MX-0005-2010-05-14-06-BSMX',
    startDateTime: '2018-10-29T15:06:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0007',
    identifier: 'MX-0007-2010-05-24-34-LNMX',
    endDateTime: '2018-11-10T21:35:00.000+0000',
    maintenanceID: 'MX-0007-2010-05-24-34-LNMX',
    startDateTime: '2018-11-09T00:34:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0014',
    identifier: 'MX-0014-2010-05-24-54-LNMX',
    endDateTime: '2018-11-09T22:37:00.000+0000',
    maintenanceID: 'MX-0014-2010-05-24-54-LNMX',
    startDateTime: '2018-11-08T22:54:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0053',
    identifier: 'MX-0053-2010-05-23-59-LNMX',
    endDateTime: '2018-11-08T12:00:00.000+0000',
    maintenanceID: 'MX-0053-2010-05-23-59-LNMX',
    startDateTime: '2018-11-07T21:59:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-HKG',
    aircraftID: 'AC-0055',
    identifier: 'MX-0055-2010-05-21-40-BSMX',
    endDateTime: '2018-11-14T00:00:00.000+0000',
    maintenanceID: 'MX-0055-2010-05-21-40-BSMX',
    startDateTime: '2018-11-05T19:40:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0057',
    identifier: 'MX-0057-2010-05-24-31-LNMX',
    endDateTime: '2018-11-09T03:49:00.000+0000',
    maintenanceID: 'MX-0057-2010-05-24-31-LNMX',
    startDateTime: '2018-11-08T21:31:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0058',
    identifier: 'MX-0058-2010-05-23-26-LNMX',
    endDateTime: '2018-11-08T12:00:00.000+0000',
    maintenanceID: 'MX-0058-2010-05-23-26-LNMX',
    startDateTime: '2018-11-07T16:26:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0062',
    identifier: 'MX-0062-2010-05-26-29-BSMX',
    endDateTime: '2018-11-11T20:35:00.000+0000',
    maintenanceID: 'MX-0062-2010-05-26-29-BSMX',
    startDateTime: '2018-11-10T16:29:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0066',
    identifier: 'MX-0066-2010-05-24-00-BSMX',
    endDateTime: '2018-11-10T10:00:00.000+0000',
    maintenanceID: 'MX-0066-2010-05-24-00-BSMX',
    startDateTime: '2018-11-08T18:00:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MCO',
    aircraftID: 'AC-0104',
    identifier: 'MX-0104-2010-05-27-44-BSMX',
    endDateTime: '2018-11-15T06:57:00.000+0000',
    maintenanceID: 'MX-0104-2010-05-27-44-BSMX',
    startDateTime: '2018-11-12T02:44:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0106',
    identifier: 'MX-0106-2010-05-12-33-BSMX',
    endDateTime: '2018-11-20T11:00:00.000+0000',
    maintenanceID: 'MX-0106-2010-05-12-33-BSMX',
    startDateTime: '2018-10-27T07:33:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MCO',
    aircraftID: 'AC-0109',
    identifier: 'MX-0109-2010-05-18-00-LNMX',
    endDateTime: '2018-11-09T03:30:00.000+0000',
    maintenanceID: 'MX-0109-2010-05-18-00-LNMX',
    startDateTime: '2018-11-03T03:00:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MCO',
    aircraftID: 'AC-0110',
    identifier: 'MX-0110-2010-05-15-08-LNMX',
    endDateTime: '2018-11-10T03:32:00.000+0000',
    maintenanceID: 'MX-0110-2010-05-15-08-LNMX',
    startDateTime: '2018-10-31T01:08:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0113',
    identifier: 'MX-0113-2010-05-27-55-BSMX',
    endDateTime: '2018-11-13T03:41:00.000+0000',
    maintenanceID: 'MX-0113-2010-05-27-55-BSMX',
    startDateTime: '2018-11-11T08:55:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0115',
    identifier: 'MX-0115-2010-05-23-14-LNMX',
    endDateTime: '2018-11-08T20:00:00.000+0000',
    maintenanceID: 'MX-0115-2010-05-23-14-LNMX',
    startDateTime: '2018-11-07T19:14:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0122',
    identifier: 'MX-0122-2010-05-23-00-LNMX',
    endDateTime: '2018-11-09T03:59:00.000+0000',
    maintenanceID: 'MX-0122-2010-05-23-00-LNMX',
    startDateTime: '2018-11-08T00:00:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0128',
    identifier: 'MX-0128-2010-05-23-13-BSMX',
    endDateTime: '2018-11-07T23:03:00.000+0000',
    maintenanceID: 'MX-0128-2010-05-23-13-BSMX',
    startDateTime: '2018-11-07T18:13:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MCO',
    aircraftID: 'AC-0131',
    identifier: 'MX-0131-2010-05-24-12-LNMX',
    endDateTime: '2018-11-12T06:31:00.000+0000',
    maintenanceID: 'MX-0131-2010-05-24-12-LNMX',
    startDateTime: '2018-11-08T23:12:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MCO',
    aircraftID: 'AC-0139',
    identifier: 'MX-0139-2010-05-26-10-BSMX',
    endDateTime: '2018-11-21T10:00:00.000+0000',
    maintenanceID: 'MX-0139-2010-05-26-10-BSMX',
    startDateTime: '2018-11-10T23:10:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0141',
    identifier: 'MX-0141-2010-05-29-18-BSMX',
    endDateTime: '2018-11-14T03:13:00.000+0000',
    maintenanceID: 'MX-0141-2010-05-29-18-BSMX',
    startDateTime: '2018-11-13T10:18:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0152',
    identifier: 'MX-0152-2010-05-27-36-LNMX',
    endDateTime: '2018-11-11T17:34:00.000+0000',
    maintenanceID: 'MX-0152-2010-05-27-36-LNMX',
    startDateTime: '2018-11-11T10:36:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0152',
    identifier: 'MX-0152-2010-06-02-23-LNMX',
    endDateTime: '2018-11-17T20:25:00.000+0000',
    maintenanceID: 'MX-0152-2010-06-02-23-LNMX',
    startDateTime: '2018-11-17T11:23:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0154',
    identifier: 'MX-0154-2010-05-25-02-LNMX',
    endDateTime: '2018-11-09T19:00:00.000+0000',
    maintenanceID: 'MX-0154-2010-05-25-02-LNMX',
    startDateTime: '2018-11-09T11:02:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0155',
    identifier: 'MX-0155-2010-06-04-33-LNMX',
    endDateTime: '2018-11-19T18:37:00.000+0000',
    maintenanceID: 'MX-0155-2010-06-04-33-LNMX',
    startDateTime: '2018-11-19T11:33:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0156',
    identifier: 'MX-0156-2010-06-01-36-LNMX',
    endDateTime: '2018-11-16T22:50:00.000+0000',
    maintenanceID: 'MX-0156-2010-06-01-36-LNMX',
    startDateTime: '2018-11-16T11:36:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0157',
    identifier: 'MX-0157-2010-06-03-08-LNMX',
    endDateTime: '2018-11-18T18:43:00.000+0000',
    maintenanceID: 'MX-0157-2010-06-03-08-LNMX',
    startDateTime: '2018-11-18T11:08:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0159',
    identifier: 'MX-0159-2010-05-24-41-LNMX',
    endDateTime: '2018-11-08T22:30:00.000+0000',
    maintenanceID: 'MX-0159-2010-05-24-41-LNMX',
    startDateTime: '2018-11-08T10:41:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-HNL',
    aircraftID: 'AC-0207',
    identifier: 'MX-0207-2010-05-27-54-LNMX',
    endDateTime: '2018-11-11T17:29:00.000+0000',
    maintenanceID: 'MX-0207-2010-05-27-54-LNMX',
    startDateTime: '2018-11-11T05:54:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-HNL',
    aircraftID: 'AC-0208',
    identifier: 'MX-0208-2010-05-25-45-LNMX',
    endDateTime: '2018-11-09T16:12:00.000+0000',
    maintenanceID: 'MX-0208-2010-05-25-45-LNMX',
    startDateTime: '2018-11-09T07:45:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-GSO',
    aircraftID: 'AC-0209',
    identifier: 'MX-0209-2010-05-21-48-BSMX',
    endDateTime: '2018-11-14T02:15:00.000+0000',
    maintenanceID: 'MX-0209-2010-05-21-48-BSMX',
    startDateTime: '2018-11-06T03:48:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0211',
    identifier: 'MX-0211-2010-05-23-28-LNMX',
    endDateTime: '2018-11-07T19:05:00.000+0000',
    maintenanceID: 'MX-0211-2010-05-23-28-LNMX',
    startDateTime: '2018-11-07T16:28:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-HNL',
    aircraftID: 'AC-0213',
    identifier: 'MX-0213-2010-05-28-29-LNMX',
    endDateTime: '2018-11-13T12:03:00.000+0000',
    maintenanceID: 'MX-0213-2010-05-28-29-LNMX',
    startDateTime: '2018-11-13T03:29:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-HNL',
    aircraftID: 'AC-0215',
    identifier: 'MX-0215-2010-05-29-30-LNMX',
    endDateTime: '2018-11-14T15:49:00.000+0000',
    maintenanceID: 'MX-0215-2010-05-29-30-LNMX',
    startDateTime: '2018-11-14T03:30:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0219',
    identifier: 'MX-0219-2010-05-26-03-LNMX',
    endDateTime: '2018-11-11T12:44:00.000+0000',
    maintenanceID: 'MX-0219-2010-05-26-03-LNMX',
    startDateTime: '2018-11-11T03:03:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0222',
    identifier: 'MX-0222-2010-05-21-28-BSMX',
    endDateTime: '2018-11-06T22:15:00.000+0000',
    maintenanceID: 'MX-0222-2010-05-21-28-BSMX',
    startDateTime: '2018-11-06T04:28:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MIA',
    aircraftID: 'AC-0228',
    identifier: 'MX-0228-2010-05-15-57-BSMX',
    endDateTime: '2018-11-22T11:00:00.000+0000',
    maintenanceID: 'MX-0228-2010-05-15-57-BSMX',
    startDateTime: '2018-10-30T14:57:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0229',
    identifier: 'MX-0229-2010-05-24-48-LNMX',
    endDateTime: '2018-11-08T22:35:00.000+0000',
    maintenanceID: 'MX-0229-2010-05-24-48-LNMX',
    startDateTime: '2018-11-08T16:48:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-HNL',
    aircraftID: 'AC-0258',
    identifier: 'MX-0258-2010-05-27-43-LNMX',
    endDateTime: '2018-11-12T17:10:00.000+0000',
    maintenanceID: 'MX-0258-2010-05-27-43-LNMX',
    startDateTime: '2018-11-12T03:43:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0270',
    identifier: 'MX-0270-2010-05-24-53-PEND',
    endDateTime: '2018-11-09T03:39:00.000+0000',
    maintenanceID: 'MX-0270-2010-05-24-53-PEND',
    startDateTime: '2018-11-08T23:53:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0282',
    identifier: 'MX-0282-2010-05-23-00-LNMX',
    endDateTime: '2018-11-08T00:22:00.000+0000',
    maintenanceID: 'MX-0282-2010-05-23-00-LNMX',
    startDateTime: '2018-11-07T19:00:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0284',
    identifier: 'MX-0284-2010-05-24-10-LNMX',
    endDateTime: '2018-11-09T12:50:00.000+0000',
    maintenanceID: 'MX-0284-2010-05-24-10-LNMX',
    startDateTime: '2018-11-08T18:10:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-HNL',
    aircraftID: 'AC-0285',
    identifier: 'MX-0285-2010-05-25-32-LNMX',
    endDateTime: '2018-11-10T12:45:00.000+0000',
    maintenanceID: 'MX-0285-2010-05-25-32-LNMX',
    startDateTime: '2018-11-10T04:32:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-HNL',
    aircraftID: 'AC-0286',
    identifier: 'MX-0286-2010-05-22-19-LNMX',
    endDateTime: '2018-11-07T17:55:00.000+0000',
    maintenanceID: 'MX-0286-2010-05-22-19-LNMX',
    startDateTime: '2018-11-07T04:19:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MCO',
    aircraftID: 'AC-0293',
    identifier: 'MX-0293-2010-05-25-25-BSMX',
    endDateTime: '2018-11-22T05:40:00.000+0000',
    maintenanceID: 'MX-0293-2010-05-25-25-BSMX',
    startDateTime: '2018-11-09T15:25:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-HNL',
    aircraftID: 'AC-0298',
    identifier: 'MX-0298-2010-05-24-03-LNMX',
    endDateTime: '2018-11-08T14:30:00.000+0000',
    maintenanceID: 'MX-0298-2010-05-24-03-LNMX',
    startDateTime: '2018-11-08T06:03:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0401',
    identifier: 'MX-0401-2010-05-24-09-LNMX',
    endDateTime: '2018-11-09T00:01:00.000+0000',
    maintenanceID: 'MX-0401-2010-05-24-09-LNMX',
    startDateTime: '2018-11-08T17:09:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MCO',
    aircraftID: 'AC-0404',
    identifier: 'MX-0404-2010-05-28-08-BSMX',
    endDateTime: '2018-11-24T07:07:00.000+0000',
    maintenanceID: 'MX-0404-2010-05-28-08-BSMX',
    startDateTime: '2018-11-12T08:08:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MCO',
    aircraftID: 'AC-0407',
    identifier: 'MX-0407-2010-05-06-58-BSMX',
    endDateTime: '2018-11-12T09:16:00.000+0000',
    maintenanceID: 'MX-0407-2010-05-06-58-BSMX',
    startDateTime: '2018-10-22T03:58:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0410',
    identifier: 'MX-0410-2010-05-23-11-LNMX',
    endDateTime: '2018-11-08T12:00:00.000+0000',
    maintenanceID: 'MX-0410-2010-05-23-11-LNMX',
    startDateTime: '2018-11-07T23:11:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0417',
    identifier: 'MX-0417-2010-05-24-16-OSVC',
    endDateTime: '2018-11-09T05:29:00.000+0000',
    maintenanceID: 'MX-0417-2010-05-24-16-OSVC',
    startDateTime: '2018-11-08T20:16:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0435',
    identifier: 'MX-0435-2010-05-23-31-LNMX',
    endDateTime: '2018-11-08T12:00:00.000+0000',
    maintenanceID: 'MX-0435-2010-05-23-31-LNMX',
    startDateTime: '2018-11-08T01:31:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0442',
    identifier: 'MX-0442-2010-05-23-52-LNMX',
    endDateTime: '2018-11-09T22:37:00.000+0000',
    maintenanceID: 'MX-0442-2010-05-23-52-LNMX',
    startDateTime: '2018-11-08T02:52:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0507',
    identifier: 'MX-0507-2010-05-24-47-LNMX',
    endDateTime: '2018-11-09T12:34:00.000+0000',
    maintenanceID: 'MX-0507-2010-05-24-47-LNMX',
    startDateTime: '2018-11-08T23:47:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-HOU',
    aircraftID: 'AC-0614',
    identifier: 'MX-0614-2010-05-11-39-BSMX',
    endDateTime: '2018-11-27T18:00:00.000+0000',
    maintenanceID: 'MX-0614-2010-05-11-39-BSMX',
    startDateTime: '2018-10-27T00:39:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0620',
    identifier: 'MX-0620-2010-05-27-30-BSMX',
    endDateTime: '2018-11-13T08:49:00.000+0000',
    maintenanceID: 'MX-0620-2010-05-27-30-BSMX',
    startDateTime: '2018-11-11T05:30:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0626',
    identifier: 'MX-0626-2010-05-29-15-BSMX',
    endDateTime: '2018-11-15T04:17:00.000+0000',
    maintenanceID: 'MX-0626-2010-05-29-15-BSMX',
    startDateTime: '2018-11-13T13:15:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0633',
    identifier: 'MX-0633-2010-05-23-37-BSMX',
    endDateTime: '2018-11-10T22:00:00.000+0000',
    maintenanceID: 'MX-0633-2010-05-23-37-BSMX',
    startDateTime: '2018-11-07T05:37:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-LAX',
    aircraftID: 'AC-0644',
    identifier: 'MX-0644-2010-05-15-10-BSMX',
    endDateTime: '2018-11-13T01:00:00.000+0000',
    maintenanceID: 'MX-0644-2010-05-15-10-BSMX',
    startDateTime: '2018-10-31T01:10:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0644',
    identifier: 'MX-0644-2010-05-30-19-BSMX',
    endDateTime: '2018-11-16T02:41:00.000+0000',
    maintenanceID: 'MX-0644-2010-05-30-19-BSMX',
    startDateTime: '2018-11-14T07:19:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MCO',
    aircraftID: 'AC-0646',
    identifier: 'MX-0646-2010-05-26-44-BSMX',
    endDateTime: '2018-11-21T06:20:00.000+0000',
    maintenanceID: 'MX-0646-2010-05-26-44-BSMX',
    startDateTime: '2018-11-11T03:44:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MCO',
    aircraftID: 'AC-0647',
    identifier: 'MX-0647-2010-04-28-41-BSMX',
    endDateTime: '2018-11-10T17:00:00.000+0000',
    maintenanceID: 'MX-0647-2010-04-28-41-BSMX',
    startDateTime: '2018-10-14T03:41:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MCO',
    aircraftID: 'AC-0647',
    identifier: 'MX-0647-2010-05-24-01-BSMX',
    endDateTime: '2018-11-11T08:28:00.000+0000',
    maintenanceID: 'MX-0647-2010-05-24-01-BSMX',
    startDateTime: '2018-11-08T12:01:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0651',
    identifier: 'MX-0651-2010-05-11-06-BSMX',
    endDateTime: '2018-11-18T21:30:00.000+0000',
    maintenanceID: 'MX-0651-2010-05-11-06-BSMX',
    startDateTime: '2018-10-27T01:06:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0653',
    identifier: 'MX-0653-2010-05-23-21-LNMX',
    endDateTime: '2018-11-09T02:12:00.000+0000',
    maintenanceID: 'MX-0653-2010-05-23-21-LNMX',
    startDateTime: '2018-11-08T03:21:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-GSO',
    aircraftID: 'AC-0703',
    identifier: 'MX-0703-2010-05-26-12-BSMX',
    endDateTime: '2018-11-21T10:00:00.000+0000',
    maintenanceID: 'MX-0703-2010-05-26-12-BSMX',
    startDateTime: '2018-11-11T01:12:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0705',
    identifier: 'MX-0705-2010-05-23-03-LNMX',
    endDateTime: '2018-11-08T23:00:00.000+0000',
    maintenanceID: 'MX-0705-2010-05-23-03-LNMX',
    startDateTime: '2018-11-08T01:03:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MIA',
    aircraftID: 'AC-0709',
    identifier: 'MX-0709-2010-05-29-38-BSMX',
    endDateTime: '2018-11-17T06:26:00.000+0000',
    maintenanceID: 'MX-0709-2010-05-29-38-BSMX',
    startDateTime: '2018-11-13T06:38:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MIA',
    aircraftID: 'AC-0713',
    identifier: 'MX-0713-2010-05-19-46-BSMX',
    endDateTime: '2018-11-13T11:09:00.000+0000',
    maintenanceID: 'MX-0713-2010-05-19-46-BSMX',
    startDateTime: '2018-11-04T03:46:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-GSO',
    aircraftID: 'AC-0716',
    identifier: 'MX-0716-2010-05-16-20-BSMX',
    endDateTime: '2018-11-10T11:00:00.000+0000',
    maintenanceID: 'MX-0716-2010-05-16-20-BSMX',
    startDateTime: '2018-11-01T04:20:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0716',
    identifier: 'MX-0716-2010-05-26-49-DOWN',
    endDateTime: '2018-11-11T07:35:00.000+0000',
    maintenanceID: 'MX-0716-2010-05-26-49-DOWN',
    startDateTime: '2018-11-10T16:49:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-MCO',
    aircraftID: 'AC-0728',
    identifier: 'MX-0728-2010-05-24-00-BSMX',
    endDateTime: '2018-11-15T18:00:00.000+0000',
    maintenanceID: 'MX-0728-2010-05-24-00-BSMX',
    startDateTime: '2018-11-09T03:00:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0852',
    identifier: 'MX-0852-2010-06-01-50-BSMX',
    endDateTime: '2018-11-17T02:48:00.000+0000',
    maintenanceID: 'MX-0852-2010-06-01-50-BSMX',
    startDateTime: '2018-11-16T09:50:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-AMA',
    aircraftID: 'AC-0855',
    identifier: 'MX-0855-2010-05-23-10-BSMX',
    endDateTime: '2018-11-17T14:08:00.000+0000',
    maintenanceID: 'MX-0855-2010-05-23-10-BSMX',
    startDateTime: '2018-11-07T13:10:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-IAH',
    aircraftID: 'AC-0861',
    identifier: 'MX-0861-2010-05-26-42-LNMX',
    endDateTime: '2018-11-10T15:22:00.000+0000',
    maintenanceID: 'MX-0861-2010-05-26-42-LNMX',
    startDateTime: '2018-11-10T08:42:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0868',
    identifier: 'MX-0868-2010-05-25-51-BSMX',
    endDateTime: '2018-11-10T03:45:00.000+0000',
    maintenanceID: 'MX-0868-2010-05-25-51-BSMX',
    startDateTime: '2018-11-09T09:51:00.000+0000'
  },
  {
    version: 1,
    priority: 'M',
    airportID: 'AP-EWR',
    aircraftID: 'AC-0869',
    identifier: 'MX-0869-2010-05-26-59-BSMX',
    endDateTime: '2018-11-11T02:27:00.000+0000',
    maintenanceID: 'MX-0869-2010-05-26-59-BSMX',
    startDateTime: '2018-11-10T08:59:00.000+0000'
  }
];

export const marketMock = [
  {
    version: 1,
    distance: 58,
    marketID: 'MK-ABE-EWR',
    identifier: 'MK-ABE-EWR',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-ABE'
  },
  {
    version: 1,
    distance: 638,
    marketID: 'MK-ABQ-CRP',
    identifier: 'MK-ABQ-CRP',
    destAirportID: 'AP-CRP',
    origAirportID: 'AP-ABQ'
  },
  {
    version: 1,
    distance: 645,
    marketID: 'MK-ABQ-IAH',
    identifier: 'MK-ABQ-IAH',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-ABQ'
  },
  {
    version: 1,
    distance: 828,
    marketID: 'MK-ACA-IAH',
    identifier: 'MK-ACA-IAH',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-ACA'
  },
  {
    version: 1,
    distance: 950,
    marketID: 'MK-ACA-MSY',
    identifier: 'MK-ACA-MSY',
    destAirportID: 'AP-MSY',
    origAirportID: 'AP-ACA'
  },
  {
    version: 1,
    distance: 159,
    marketID: 'MK-AEX-IAH',
    identifier: 'MK-AEX-IAH',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-AEX'
  },
  {
    version: 1,
    distance: 177,
    marketID: 'MK-AEX-JAN',
    identifier: 'MK-AEX-JAN',
    destAirportID: 'AP-JAN',
    origAirportID: 'AP-AEX'
  },
  {
    version: 1,
    distance: 621,
    marketID: 'MK-AGU-IAH',
    identifier: 'MK-AGU-IAH',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-AGU'
  },
  {
    version: 1,
    distance: 367,
    marketID: 'MK-ALB-CLE',
    identifier: 'MK-ALB-CLE',
    destAirportID: 'AP-CLE',
    origAirportID: 'AP-ALB'
  },
  {
    version: 1,
    distance: 124,
    marketID: 'MK-ALB-EWR',
    identifier: 'MK-ALB-EWR',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-ALB'
  },
  {
    version: 1,
    distance: 451,
    marketID: 'MK-AMA-IAH',
    identifier: 'MK-AMA-IAH',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-AMA'
  },
  {
    version: 1,
    distance: 3166,
    marketID: 'MK-AMS-EWR',
    identifier: 'MK-AMS-EWR',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-AMS'
  },
  {
    version: 1,
    distance: 4345,
    marketID: 'MK-AMS-IAH',
    identifier: 'MK-AMS-IAH',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-AMS'
  },
  {
    version: 1,
    distance: 2833,
    marketID: 'MK-ANC-IAH',
    identifier: 'MK-ANC-IAH',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-ANC'
  },
  {
    version: 1,
    distance: 1254,
    marketID: 'MK-ANC-SEA',
    identifier: 'MK-ANC-SEA',
    destAirportID: 'AP-SEA',
    origAirportID: 'AP-ANC'
  },
  {
    version: 1,
    distance: 1552,
    marketID: 'MK-ANU-EWR',
    identifier: 'MK-ANU-EWR',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-ANU'
  },
  {
    version: 1,
    distance: 3403,
    marketID: 'MK-ARN-EWR',
    identifier: 'MK-ARN-EWR',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-ARN'
  },
  {
    version: 1,
    distance: 604,
    marketID: 'MK-ATL-ABE',
    identifier: 'MK-ATL-ABE',
    destAirportID: 'AP-ABE',
    origAirportID: 'AP-ATL'
  },
  {
    version: 1,
    distance: 482,
    marketID: 'MK-ATL-CLE',
    identifier: 'MK-ATL-CLE',
    destAirportID: 'AP-CLE',
    origAirportID: 'AP-ATL'
  },
  {
    version: 1,
    distance: 647,
    marketID: 'MK-ATL-EWR',
    identifier: 'MK-ATL-EWR',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-ATL'
  },
  {
    version: 1,
    distance: 599,
    marketID: 'MK-ATL-IAH',
    identifier: 'MK-ATL-IAH',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-ATL'
  },
  {
    version: 1,
    distance: 448,
    marketID: 'MK-ATL-ORF',
    identifier: 'MK-ATL-ORF',
    destAirportID: 'AP-ORF',
    origAirportID: 'AP-ATL'
  },
  {
    version: 1,
    distance: 1706,
    marketID: 'MK-AUA-EWR',
    identifier: 'MK-AUA-EWR',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-AUA'
  },
  {
    version: 1,
    distance: 1754,
    marketID: 'MK-AUA-IAH',
    identifier: 'MK-AUA-IAH',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-AUA'
  },
  {
    version: 1,
    distance: 1302,
    marketID: 'MK-AUS-EWR',
    identifier: 'MK-AUS-EWR',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-AUS'
  },
  {
    version: 1,
    distance: 124,
    marketID: 'MK-AUS-IAH',
    identifier: 'MK-AUS-IAH',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-AUS'
  },
  {
    version: 1,
    distance: 506,
    marketID: 'MK-AVL-EWR',
    identifier: 'MK-AVL-EWR',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-AVL'
  }
];

export const nonFlyMock = [
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EM100--2010-05-21--020--010',
    identifier: 'NF-PA-CO--P--EM100--2010-05-21--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-05T16:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-05T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EM100--2010-05-25--020--010',
    identifier: 'NF-PA-CO--P--EM100--2010-05-25--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-09T16:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-09T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EM100--2010-05-26--020--010',
    identifier: 'NF-PA-CO--P--EM100--2010-05-26--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-10T16:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-10T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EM100--2010-05-27--020--010',
    identifier: 'NF-PA-CO--P--EM100--2010-05-27--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-11T16:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-11T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EM100--2010-06-07--020--010',
    identifier: 'NF-PA-CO--P--EM100--2010-06-07--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-22T16:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-22T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EM300--2010-05-21--020--010',
    identifier: 'NF-PA-CO--P--EM300--2010-05-21--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-05T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-05T17:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EM300--2010-05-25--020--010',
    identifier: 'NF-PA-CO--P--EM300--2010-05-25--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-09T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-09T17:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EM300--2010-05-26--020--010',
    identifier: 'NF-PA-CO--P--EM300--2010-05-26--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-10T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-10T17:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EM300--2010-05-27--020--010',
    identifier: 'NF-PA-CO--P--EM300--2010-05-27--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-11T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-11T17:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EM300--2010-06-07--020--010',
    identifier: 'NF-PA-CO--P--EM300--2010-06-07--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-22T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-22T17:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--HG100--2010-05-21--020--010',
    identifier: 'NF-PA-CO--P--HG100--2010-05-21--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-05T17:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-05T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--HG100--2010-05-26--020--010',
    identifier: 'NF-PA-CO--P--HG100--2010-05-26--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-10T17:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-10T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--HG100--2010-06-07--020--010',
    identifier: 'NF-PA-CO--P--HG100--2010-06-07--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-22T17:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-22T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--HG300--2010-05-21--020--010',
    identifier: 'NF-PA-CO--P--HG300--2010-05-21--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-05T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-05T18:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--HG300--2010-05-26--020--010',
    identifier: 'NF-PA-CO--P--HG300--2010-05-26--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-10T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-10T18:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--HR001--2010-05-25--020--010',
    identifier: 'NF-PA-CO--F--HR001--2010-05-25--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-09T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-09T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--HR001--2010-05-26--020--010',
    identifier: 'NF-PA-CO--F--HR001--2010-05-26--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-10T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-10T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--HR001--2010-05-27--020--010',
    identifier: 'NF-PA-CO--F--HR001--2010-05-27--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-11T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-11T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EG100--2010-05-26--020--010',
    identifier: 'NF-PA-CO--P--EG100--2010-05-26--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-10T16:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-10T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EG100--2010-05-27--020--010',
    identifier: 'NF-PA-CO--P--EG100--2010-05-27--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-11T16:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-11T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EG100--2010-06-07--020--010',
    identifier: 'NF-PA-CO--P--EG100--2010-06-07--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-22T16:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-22T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--HG300--2010-06-07--020--010',
    identifier: 'NF-PA-CO--P--HG300--2010-06-07--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-22T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-22T18:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--HM100--2010-05-21--020--010',
    identifier: 'NF-PA-CO--P--HM100--2010-05-21--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-05T17:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-05T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--HM100--2010-05-26--020--010',
    identifier: 'NF-PA-CO--P--HM100--2010-05-26--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-10T17:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-10T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--ER001A--2010-05-23--020--010',
    identifier: 'NF-PA-CO--F--ER001A--2010-05-23--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-07T21:30:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-07T12:30:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--ER001A--2010-05-24--020--010',
    identifier: 'NF-PA-CO--F--ER001A--2010-05-24--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-08T21:30:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-08T12:30:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--ER001A--2010-05-25--020--010',
    identifier: 'NF-PA-CO--F--ER001A--2010-05-25--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-09T21:30:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-09T12:30:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--HR001--2010-05-22--020--010',
    identifier: 'NF-PA-CO--F--HR001--2010-05-22--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-06T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-06T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--HR001--2010-05-23--020--010',
    identifier: 'NF-PA-CO--F--HR001--2010-05-23--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-07T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-07T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--HR001--2010-05-24--020--010',
    identifier: 'NF-PA-CO--F--HR001--2010-05-24--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-08T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-08T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--ER001--2010-05-24--020--010',
    identifier: 'NF-PA-CO--F--ER001--2010-05-24--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-08T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-08T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--ER001--2010-05-25--020--010',
    identifier: 'NF-PA-CO--F--ER001--2010-05-25--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-09T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-09T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--ER001--2010-05-26--020--010',
    identifier: 'NF-PA-CO--F--ER001--2010-05-26--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-10T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-10T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--ER001--2010-05-27--020--010',
    identifier: 'NF-PA-CO--F--ER001--2010-05-27--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-11T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-11T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--ER001A--2010-05-21--020--010',
    identifier: 'NF-PA-CO--F--ER001A--2010-05-21--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-05T21:30:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-05T12:30:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--ER001A--2010-05-22--020--010',
    identifier: 'NF-PA-CO--F--ER001A--2010-05-22--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-06T21:30:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-06T12:30:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--ER001--2010-05-21--020--010',
    identifier: 'NF-PA-CO--F--ER001--2010-05-21--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-05T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-05T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--ER001--2010-05-22--020--010',
    identifier: 'NF-PA-CO--F--ER001--2010-05-22--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-06T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-06T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--ER001--2010-05-23--020--010',
    identifier: 'NF-PA-CO--F--ER001--2010-05-23--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-07T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-07T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EG199--2010-05-26--020--010',
    identifier: 'NF-PA-CO--P--EG199--2010-05-26--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-10T16:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-10T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EG300--2010-05-21--020--010',
    identifier: 'NF-PA-CO--P--EG300--2010-05-21--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-05T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-05T17:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EG300--2010-05-25--020--010',
    identifier: 'NF-PA-CO--P--EG300--2010-05-25--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-09T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-09T17:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EG300--2010-05-26--020--010',
    identifier: 'NF-PA-CO--P--EG300--2010-05-26--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-10T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-10T17:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EG300--2010-05-27--020--010',
    identifier: 'NF-PA-CO--P--EG300--2010-05-27--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-11T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-11T17:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EG300--2010-06-07--020--010',
    identifier: 'NF-PA-CO--P--EG300--2010-06-07--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-22T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-22T17:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--ER001A--2010-05-26--020--010',
    identifier: 'NF-PA-CO--F--ER001A--2010-05-26--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-10T21:30:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-10T12:30:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--ER001A--2010-05-27--020--010',
    identifier: 'NF-PA-CO--F--ER001A--2010-05-27--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-11T21:30:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-11T12:30:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--HR001--2010-05-21--020--010',
    identifier: 'NF-PA-CO--F--HR001--2010-05-21--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-05T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-05T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--TW001--2010-05-27--020--010',
    identifier: 'NF-PA-CO--F--TW001--2010-05-27--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-11T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-11T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--TW002--2010-05-27--020--010',
    identifier: 'NF-PA-CO--F--TW002--2010-05-27--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-11T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-11T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--YW001--2010-05-21--020--010',
    identifier: 'NF-PA-CO--F--YW001--2010-05-21--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-05T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-05T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--YW001--2010-05-22--020--010',
    identifier: 'NF-PA-CO--F--YW001--2010-05-22--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-06T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-06T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--YW001--2010-05-24--020--010',
    identifier: 'NF-PA-CO--F--YW001--2010-05-24--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-08T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-08T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--YW001--2010-05-25--020--010',
    identifier: 'NF-PA-CO--F--YW001--2010-05-25--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-09T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-09T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--F--YW002--2010-05-25--020--010',
    identifier: 'NF-PA-CO--F--YW002--2010-05-25--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-09T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-09T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EG100--2010-05-21--020--010',
    identifier: 'NF-PA-CO--P--EG100--2010-05-21--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-05T16:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-05T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--EG100--2010-05-25--020--010',
    identifier: 'NF-PA-CO--P--EG100--2010-05-25--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-09T16:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-EWR',
    startDateTime: '2018-11-09T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--HM100--2010-06-07--020--010',
    identifier: 'NF-PA-CO--P--HM100--2010-06-07--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-22T17:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-22T13:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--HM300--2010-05-21--020--010',
    identifier: 'NF-PA-CO--P--HM300--2010-05-21--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-05T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-05T18:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--HM300--2010-05-26--020--010',
    identifier: 'NF-PA-CO--P--HM300--2010-05-26--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-10T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-10T18:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--HM300--2010-06-07--020--010',
    identifier: 'NF-PA-CO--P--HM300--2010-06-07--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-22T22:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    startDateTime: '2018-11-22T18:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--VG100--2010-05-21--020--010',
    identifier: 'NF-PA-CO--P--VG100--2010-05-21--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-05T16:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-CLE',
    origAirportID: 'AP-CLE',
    startDateTime: '2018-11-05T12:00:00.000+0000'
  },
  {
    code: 'UNAVAILABLE',
    label: 'TRN',
    version: 1,
    nonflyID: 'NF-PA-CO--P--VM300--2010-05-21--020--010',
    identifier: 'NF-PA-CO--P--VM300--2010-05-21--020--010',
    isDutyTime: true,
    endDateTime: '2018-11-05T21:00:00.000+0000',
    changeability: 'UNCHANGEABLE',
    destAirportID: 'AP-CLE',
    origAirportID: 'AP-CLE',
    startDateTime: '2018-11-05T17:00:00.000+0000'
  }
];

export const offlineTransportationMock = [
  {
    name: 'FAKE',
    version: 1,
    identifier: 'OT-FAKE--CLE--EWR--20100521--CO--F--E6466B--2010-05-19--070',
    isCanceled: false,
    isPenalized: true,
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-CLE',
    startDateTime: '2018-11-05T20:55:00.000+0000',
    durationInMinutes: 100,
    isSchedulingResource: false,
    offlineTransportationID:
      'OT-FAKE--CLE--EWR--20100521--CO--F--E6466B--2010-05-19--070',
    airlineSpecificProperties: {
      property: [
        {
          name: 'SchDep',
          value: '2010-05-21T20:55:00.000Z'
        }
      ],
      propertyCount: 1
    },
    offlineTransportationType: 'AIR'
  },
  {
    name: 'FAKE',
    version: 1,
    identifier: 'OT-FAKE--CLE--EWR--20100523--CO--P--E5731C--2010-05-19--120',
    isCanceled: false,
    isPenalized: true,
    destAirportID: 'AP-EWR',
    origAirportID: 'AP-CLE',
    startDateTime: '2018-11-07T10:25:00.000+0000',
    durationInMinutes: 74,
    isSchedulingResource: false,
    offlineTransportationID:
      'OT-FAKE--CLE--EWR--20100523--CO--P--E5731C--2010-05-19--120',
    airlineSpecificProperties: {
      property: [
        {
          name: 'SchDep',
          value: '2010-05-23T10:25:00.000Z'
        }
      ],
      propertyCount: 1
    },
    offlineTransportationType: 'AIR'
  },
  {
    name: 'FAKE',
    version: 1,
    identifier: 'OT-FAKE--CLE--IAH--20100517--CO--P--V5985A--2010-05-17--010',
    isCanceled: false,
    isPenalized: true,
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-CLE',
    startDateTime: '2018-11-01T10:00:00.000+0000',
    durationInMinutes: 170,
    isSchedulingResource: false,
    offlineTransportationID:
      'OT-FAKE--CLE--IAH--20100517--CO--P--V5985A--2010-05-17--010',
    airlineSpecificProperties: {
      property: [
        {
          name: 'SchDep',
          value: '2010-05-17T10:00:00.000Z'
        }
      ],
      propertyCount: 1
    },
    offlineTransportationType: 'AIR'
  },
  {
    name: 'FAKE',
    version: 1,
    identifier: 'OT-FAKE--CLE--IAH--20100517--CO--P--V5985B--2010-05-17--010',
    isCanceled: false,
    isPenalized: true,
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-CLE',
    startDateTime: '2018-11-01T10:00:00.000+0000',
    durationInMinutes: 170,
    isSchedulingResource: false,
    offlineTransportationID:
      'OT-FAKE--CLE--IAH--20100517--CO--P--V5985B--2010-05-17--010',
    airlineSpecificProperties: {
      property: [
        {
          name: 'SchDep',
          value: '2010-05-17T10:00:00.000Z'
        }
      ],
      propertyCount: 1
    },
    offlineTransportationType: 'AIR'
  },
  {
    name: 'FAKE',
    version: 1,
    identifier: 'OT-FAKE--CLE--IAH--20100519--CO--P--V5986A--2010-05-19--010',
    isCanceled: false,
    isPenalized: true,
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-CLE',
    startDateTime: '2018-11-03T10:00:00.000+0000',
    durationInMinutes: 170,
    isSchedulingResource: false,
    offlineTransportationID:
      'OT-FAKE--CLE--IAH--20100519--CO--P--V5986A--2010-05-19--010',
    airlineSpecificProperties: {
      property: [
        {
          name: 'SchDep',
          value: '2010-05-19T10:00:00.000Z'
        }
      ],
      propertyCount: 1
    },
    offlineTransportationType: 'AIR'
  },
  {
    name: 'FAKE',
    version: 1,
    identifier: 'OT-FAKE--CLE--IAH--20100519--CO--P--V5986B--2010-05-19--010',
    isCanceled: false,
    isPenalized: true,
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-CLE',
    startDateTime: '2018-11-03T10:00:00.000+0000',
    durationInMinutes: 170,
    isSchedulingResource: false,
    offlineTransportationID:
      'OT-FAKE--CLE--IAH--20100519--CO--P--V5986B--2010-05-19--010',
    airlineSpecificProperties: {
      property: [
        {
          name: 'SchDep',
          value: '2010-05-19T10:00:00.000Z'
        }
      ],
      propertyCount: 1
    },
    offlineTransportationType: 'AIR'
  },
  {
    name: 'FAKE',
    version: 1,
    identifier: 'OT-FAKE--CLE--IAH--20100521--CO--P--V5185A--2010-05-21--010',
    isCanceled: false,
    isPenalized: true,
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-CLE',
    startDateTime: '2018-11-05T18:50:00.000+0000',
    durationInMinutes: 180,
    isSchedulingResource: false,
    offlineTransportationID:
      'OT-FAKE--CLE--IAH--20100521--CO--P--V5185A--2010-05-21--010',
    airlineSpecificProperties: {
      property: [
        {
          name: 'SchDep',
          value: '2010-05-21T18:50:00.000Z'
        }
      ],
      propertyCount: 1
    },
    offlineTransportationType: 'AIR'
  },
  {
    name: 'FAKE',
    version: 1,
    identifier: 'OT-FAKE--CLE--IAH--20100524--CO--P--V5985A--2010-05-24--010',
    isCanceled: false,
    isPenalized: true,
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-CLE',
    startDateTime: '2018-11-08T10:00:00.000+0000',
    durationInMinutes: 170,
    isSchedulingResource: false,
    offlineTransportationID:
      'OT-FAKE--CLE--IAH--20100524--CO--P--V5985A--2010-05-24--010',
    airlineSpecificProperties: {
      property: [
        {
          name: 'SchDep',
          value: '2010-05-24T10:00:00.000Z'
        }
      ],
      propertyCount: 1
    },
    offlineTransportationType: 'AIR'
  },
  {
    name: 'FAKE',
    version: 1,
    identifier: 'OT-FAKE--CLE--LAX--20100517--CO--P--V5988B--2010-05-17--010',
    isCanceled: false,
    isPenalized: true,
    destAirportID: 'AP-LAX',
    origAirportID: 'AP-CLE',
    startDateTime: '2018-11-01T13:05:00.000+0000',
    durationInMinutes: 300,
    isSchedulingResource: false,
    offlineTransportationID:
      'OT-FAKE--CLE--LAX--20100517--CO--P--V5988B--2010-05-17--010',
    airlineSpecificProperties: {
      property: [
        {
          name: 'SchDep',
          value: '2010-05-17T13:05:00.000Z'
        }
      ],
      propertyCount: 1
    },
    offlineTransportationType: 'AIR'
  },
  {
    name: 'FAKE',
    version: 1,
    identifier: 'OT-FAKE--CLE--LAX--20100517--CO--P--V5988C--2010-05-17--010',
    isCanceled: false,
    isPenalized: true,
    destAirportID: 'AP-LAX',
    origAirportID: 'AP-CLE',
    startDateTime: '2018-11-01T13:05:00.000+0000',
    durationInMinutes: 300,
    isSchedulingResource: false,
    offlineTransportationID:
      'OT-FAKE--CLE--LAX--20100517--CO--P--V5988C--2010-05-17--010',
    airlineSpecificProperties: {
      property: [
        {
          name: 'SchDep',
          value: '2010-05-17T13:05:00.000Z'
        }
      ],
      propertyCount: 1
    },
    offlineTransportationType: 'AIR'
  },
  {
    name: 'FAKE',
    version: 1,
    identifier: 'OT-FAKE--CLE--LAX--20100517--CO--P--V5988D--2010-05-17--010',
    isCanceled: false,
    isPenalized: true,
    destAirportID: 'AP-LAX',
    origAirportID: 'AP-CLE',
    startDateTime: '2018-11-01T13:05:00.000+0000',
    durationInMinutes: 300,
    isSchedulingResource: false,
    offlineTransportationID:
      'OT-FAKE--CLE--LAX--20100517--CO--P--V5988D--2010-05-17--010',
    airlineSpecificProperties: {
      property: [
        {
          name: 'SchDep',
          value: '2010-05-17T13:05:00.000Z'
        }
      ],
      propertyCount: 1
    },
    offlineTransportationType: 'AIR'
  },
  {
    name: 'FAKE',
    version: 1,
    identifier: 'OT-FAKE--CLE--LAX--20100519--CO--P--V5989A--2010-05-19--010',
    isCanceled: false,
    isPenalized: true,
    destAirportID: 'AP-LAX',
    origAirportID: 'AP-CLE',
    startDateTime: '2018-11-03T13:05:00.000+0000',
    durationInMinutes: 300,
    isSchedulingResource: false,
    offlineTransportationID:
      'OT-FAKE--CLE--LAX--20100519--CO--P--V5989A--2010-05-19--010',
    airlineSpecificProperties: {
      property: [
        {
          name: 'SchDep',
          value: '2010-05-19T13:05:00.000Z'
        }
      ],
      propertyCount: 1
    },
    offlineTransportationType: 'AIR'
  }
];

export const pairingMock = [
  {
    name: 'H3C52G',
    baseID: 'CB-H',
    version: 1,
    pairingID: 'PA-CO--F--H3C52G--2010-05-21',
    startDate: '2018-11-09',
    identifier: 'PA-CO--F--H3C52G--2010-05-21',
    assignments: {
      assignment: [
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA01',
          subpositionID: 'FA01'
        }
      ],
      assignmentCount: 1
    },
    positionType: 'F',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    airlineSpecificProperties: {
      property: [
        {
          name: 'Subpositions',
          value: 'FA01'
        }
      ],
      propertyCount: 1
    }
  },
  {
    name: 'H1117',
    baseID: 'CB-H',
    version: 1,
    pairingID: 'PA-CO--F--H1117--2010-05-20',
    startDate: '2018-11-08',
    identifier: 'PA-CO--F--H1117--2010-05-20',
    assignments: {
      assignment: [
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA01',
          subpositionID: 'FA01'
        },
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA02',
          subpositionID: 'FA02'
        }
      ],
      assignmentCount: 2
    },
    positionType: 'F',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    airlineSpecificProperties: {
      property: [
        {
          name: 'Subpositions',
          value: 'FA01FA02'
        }
      ],
      propertyCount: 1
    }
  },
  {
    name: 'H5017',
    baseID: 'CB-H',
    version: 1,
    pairingID: 'PA-CO--F--H5017--2010-05-27',
    startDate: '2018-11-15',
    identifier: 'PA-CO--F--H5017--2010-05-27',
    assignments: {
      assignment: [
        {
          crewID: 'CR-0383A',
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA02',
          subpositionID: 'FA02'
        },
        {
          crewID: 'CR-0426N',
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FM01',
          subpositionID: 'FM01'
        },
        {
          crewID: 'CR-0892A',
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA01',
          subpositionID: 'FA01'
        }
      ],
      assignmentCount: 3
    },
    positionType: 'F',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    airlineSpecificProperties: {
      property: [
        {
          name: 'Subpositions',
          value: 'FA01FA02FM01'
        }
      ],
      propertyCount: 1
    }
  },
  {
    name: 'H3695',
    baseID: 'CB-H',
    version: 1,
    pairingID: 'PA-CO--F--H3695--2010-05-26',
    startDate: '2018-11-14',
    identifier: 'PA-CO--F--H3695--2010-05-26',
    assignments: {
      assignment: [
        {
          crewID: 'CR-83105',
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA01',
          subpositionID: 'FA01'
        }
      ],
      assignmentCount: 1
    },
    positionType: 'F',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    airlineSpecificProperties: {
      property: [
        {
          name: 'Subpositions',
          value: 'FA01'
        }
      ],
      propertyCount: 1
    }
  },
  {
    name: 'H3738',
    baseID: 'CB-H',
    duties: {
      duty: [
        {
          hotelID: 'HT-MSY--RDA',
          restCode: 'S0',
          segments: {
            segmentsItem: [
              {
                flightSegment: {
                  flightID: 'FL-CO-20181111-IAH-LAX-1495',
                  segmentNumber: 1
                }
              },
              {
                flightSegment: {
                  flightID: 'FL-CO-20181111-LAX-IAH-46',
                  segmentNumber: 2
                }
              },
              {
                flightSegment: {
                  flightID: 'FL-CO-20181111-IAH-MSY-423',
                  segmentNumber: 3
                }
              }
            ],
            segmentsItemCount: 3
          },
          sequenceID: '040',
          isReportTimeFrozen: false,
          reportDateTimeActual: '2018-11-11T13:05:00.000+0000',
          releaseDateTimeActual: '2018-11-12T01:47:00.000+0000',
          reportDateTimeOriginal: '2018-11-11T13:05:00.000+0000',
          releaseDateTimeOriginal: '2018-11-12T01:45:00.000+0000',
          reportDateTimeScheduled: '2018-11-11T13:05:00.000+0000',
          releaseDateTimeScheduled: '2018-11-12T01:45:00.000+0000',
          isFlightDutyPeriodExtended: false
        },
        {
          hotelID: 'HT-MCO--LQS',
          restCode: 'S0',
          segments: {
            segmentsItem: [
              {
                flightSegment: {
                  flightID: 'FL-CO-20181112-MSY-IAH-322',
                  segmentNumber: 4
                }
              },
              {
                flightSegment: {
                  flightID: 'FL-CO-20181112-IAH-MCO-686',
                  segmentNumber: 5
                }
              }
            ],
            segmentsItemCount: 2
          },
          sequenceID: '070',
          isReportTimeFrozen: false,
          reportDateTimeActual: '2018-11-12T12:15:00.000+0000',
          releaseDateTimeActual: '2018-11-12T18:11:00.000+0000',
          reportDateTimeOriginal: '2018-11-12T12:15:00.000+0000',
          releaseDateTimeOriginal: '2018-11-12T18:08:00.000+0000',
          reportDateTimeScheduled: '2018-11-12T12:15:00.000+0000',
          releaseDateTimeScheduled: '2018-11-12T18:08:00.000+0000',
          isFlightDutyPeriodExtended: false
        },
        {
          hotelID: 'HT-LAX--WES',
          restCode: 'S0',
          segments: {
            segmentsItem: [
              {
                flightSegment: {
                  flightID: 'FL-CO-20181113-MCO-IAH-687',
                  segmentNumber: 6
                }
              },
              {
                flightSegment: {
                  flightID: 'FL-CO-20181113-IAH-LAX-1795',
                  segmentNumber: 7
                }
              }
            ],
            segmentsItemCount: 2
          },
          sequenceID: '100',
          isReportTimeFrozen: false,
          reportDateTimeOriginal: '2018-11-13T18:00:00.000+0000',
          releaseDateTimeOriginal: '2018-11-14T02:49:00.000+0000',
          reportDateTimeScheduled: '2018-11-13T18:00:00.000+0000',
          releaseDateTimeScheduled: '2018-11-14T02:49:00.000+0000',
          isFlightDutyPeriodExtended: false
        }
      ],
      dutyCount: 3
    },
    version: 1,
    pairingID: 'PA-CO--F--H3738--2010-05-23',
    startDate: '2018-11-11',
    identifier: 'PA-CO--F--H3738--2010-05-23',
    assignments: {
      assignment: [
        {
          crewID: 'CR-C7529',
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA01',
          subpositionID: 'FA01'
        }
      ],
      assignmentCount: 1
    },
    positionType: 'F',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    airlineSpecificProperties: {
      property: [
        {
          name: 'Subpositions',
          value: 'FA01'
        }
      ],
      propertyCount: 1
    }
  },
  {
    name: 'H3A62A',
    baseID: 'CB-H',
    duties: {
      duty: [
        {
          hotelID: 'HT-SJC--MAR',
          restCode: 'S0',
          segments: {
            segmentsItem: [
              {
                flightSegment: {
                  flightID: 'FL-CO-20181112-IAH-SJC-1991',
                  segmentNumber: 1
                }
              }
            ],
            segmentsItemCount: 1
          },
          sequenceID: '020',
          isReportTimeFrozen: false,
          reportDateTimeOriginal: '2018-11-12T22:50:00.000+0000',
          releaseDateTimeOriginal: '2018-11-13T04:25:00.000+0000',
          reportDateTimeScheduled: '2018-11-12T22:50:00.000+0000',
          releaseDateTimeScheduled: '2018-11-13T04:25:00.000+0000',
          isFlightDutyPeriodExtended: false
        },
        {
          restCode: 'S0',
          segments: {
            segmentsItem: [
              {
                flightSegment: {
                  flightID: 'FL-CO-20181113-SJC-AUS-1929',
                  segmentNumber: 2
                }
              },
              {
                flightSegment: {
                  flightID: 'FL-CO-20181113-AUS-IAH-1941',
                  segmentNumber: 3,
                  segmentWorkCodes: {
                    segmentWorkCode: [
                      {
                        code: 'DH'
                      }
                    ],
                    segmentWorkCodeCount: 1
                  }
                }
              }
            ],
            segmentsItemCount: 2
          },
          sequenceID: '050',
          isReportTimeFrozen: false,
          reportDateTimeOriginal: '2018-11-13T15:00:00.000+0000',
          releaseDateTimeOriginal: '2018-11-13T20:55:00.000+0000',
          reportDateTimeScheduled: '2018-11-13T15:00:00.000+0000',
          releaseDateTimeScheduled: '2018-11-13T20:55:00.000+0000',
          isFlightDutyPeriodExtended: false
        }
      ],
      dutyCount: 2
    },
    version: 1,
    pairingID: 'PA-CO--F--H3A62A--2010-05-24',
    startDate: '2018-11-12',
    identifier: 'PA-CO--F--H3A62A--2010-05-24',
    assignments: {
      assignment: [
        {
          crewID: 'CR-0513Y',
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA04',
          subpositionID: 'FA04'
        },
        {
          crewID: 'CR-45960',
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA03',
          subpositionID: 'FA03'
        },
        {
          crewID: 'CR-91804',
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA02',
          subpositionID: 'FA02'
        },
        {
          crewID: 'CR-98538',
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FM01',
          subpositionID: 'FM01'
        },
        {
          crewID: 'CR-A5442',
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA01',
          subpositionID: 'FA01'
        }
      ],
      assignmentCount: 5
    },
    positionType: 'F',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    classifications: {
      classification: [
        {
          value: 'CHARTER'
        },
        {
          value: 'PROTECTED'
        }
      ],
      classificationCount: 2
    },
    airlineSpecificProperties: {
      property: [
        {
          name: 'Subpositions',
          value: 'FA01FA02FA03FA04FM01'
        }
      ],
      propertyCount: 1
    }
  },
  {
    name: 'H5141',
    baseID: 'CB-H',
    version: 1,
    pairingID: 'PA-CO--F--H5141--2010-05-20',
    startDate: '2018-11-08',
    identifier: 'PA-CO--F--H5141--2010-05-20',
    assignments: {
      assignment: [
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA01',
          subpositionID: 'FA01'
        },
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA02',
          subpositionID: 'FA02'
        }
      ],
      assignmentCount: 2
    },
    positionType: 'F',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    airlineSpecificProperties: {
      property: [
        {
          name: 'Subpositions',
          value: 'FA01FA02'
        }
      ],
      propertyCount: 1
    }
  },
  {
    name: 'H5009',
    baseID: 'CB-H',
    version: 1,
    pairingID: 'PA-CO--F--H5009--2010-05-21',
    startDate: '2018-11-09',
    identifier: 'PA-CO--F--H5009--2010-05-21',
    assignments: {
      assignment: [
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA01',
          subpositionID: 'FA01'
        },
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA02',
          subpositionID: 'FA02'
        },
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FM01',
          subpositionID: 'FM01'
        }
      ],
      assignmentCount: 3
    },
    positionType: 'F',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    airlineSpecificProperties: {
      property: [
        {
          name: 'Subpositions',
          value: 'FA01FA02FM01'
        }
      ],
      propertyCount: 1
    }
  },
  {
    name: 'H5021',
    baseID: 'CB-H',
    version: 1,
    pairingID: 'PA-CO--F--H5021--2010-05-21',
    startDate: '2018-11-09',
    identifier: 'PA-CO--F--H5021--2010-05-21',
    assignments: {
      assignment: [
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA01',
          subpositionID: 'FA01'
        },
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA02',
          subpositionID: 'FA02'
        },
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FM01',
          subpositionID: 'FM01'
        }
      ],
      assignmentCount: 3
    },
    positionType: 'F',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    airlineSpecificProperties: {
      property: [
        {
          name: 'Subpositions',
          value: 'FA01FA02FM01'
        }
      ],
      propertyCount: 1
    }
  },
  {
    name: 'H1169',
    baseID: 'CB-H',
    duties: {
      duty: [
        {
          hotelID: 'HT-CCS--EUR',
          restCode: 'S0',
          segments: {
            segmentsItem: [
              {
                flightSegment: {
                  flightID: 'FL-CO-20181111-IAH-CCS-1666',
                  segmentNumber: 1
                }
              }
            ],
            segmentsItemCount: 1
          },
          sequenceID: '020',
          isReportTimeFrozen: false,
          reportDateTimeActual: '2018-11-12T03:59:00.000+0000',
          releaseDateTimeActual: '2018-11-12T10:00:00.000+0000',
          reportDateTimeOriginal: '2018-11-12T03:59:00.000+0000',
          releaseDateTimeOriginal: '2018-11-12T10:14:00.000+0000',
          reportDateTimeScheduled: '2018-11-12T03:59:00.000+0000',
          releaseDateTimeScheduled: '2018-11-12T10:14:00.000+0000',
          isFlightDutyPeriodExtended: false
        },
        {
          restCode: 'S0',
          segments: {
            segmentsItem: [
              {
                flightSegment: {
                  flightID: 'FL-CO-20181113-CCS-IAH-1667',
                  segmentNumber: 2
                }
              }
            ],
            segmentsItemCount: 1
          },
          sequenceID: '040',
          isReportTimeFrozen: false,
          reportDateTimeOriginal: '2018-11-13T12:10:00.000+0000',
          releaseDateTimeOriginal: '2018-11-13T18:45:00.000+0000',
          reportDateTimeScheduled: '2018-11-13T12:10:00.000+0000',
          releaseDateTimeScheduled: '2018-11-13T18:45:00.000+0000',
          isFlightDutyPeriodExtended: false
        }
      ],
      dutyCount: 2
    },
    version: 1,
    pairingID: 'PA-CO--F--H1169--2010-05-23',
    startDate: '2018-11-11',
    identifier: 'PA-CO--F--H1169--2010-05-23',
    assignments: {
      assignment: [
        {
          crewID: 'CR-A1793',
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA02',
          subpositionID: 'FA02'
        },
        {
          crewID: 'CR-D2349',
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA01',
          subpositionID: 'FA01'
        }
      ],
      assignmentCount: 2
    },
    positionType: 'F',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    airlineSpecificProperties: {
      property: [
        {
          name: 'Subpositions',
          value: 'FA01FA02'
        }
      ],
      propertyCount: 1
    }
  },
  {
    name: 'H3640',
    baseID: 'CB-H',
    version: 1,
    pairingID: 'PA-CO--F--H3640--2010-05-21',
    startDate: '2018-11-09',
    identifier: 'PA-CO--F--H3640--2010-05-21',
    assignments: {
      assignment: [
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA01',
          subpositionID: 'FA01'
        }
      ],
      assignmentCount: 1
    },
    positionType: 'F',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    airlineSpecificProperties: {
      property: [
        {
          name: 'Subpositions',
          value: 'FA01'
        }
      ],
      propertyCount: 1
    }
  },
  {
    name: 'H5050',
    baseID: 'CB-H',
    version: 1,
    pairingID: 'PA-CO--F--H5050--2010-05-22',
    startDate: '2018-11-10',
    identifier: 'PA-CO--F--H5050--2010-05-22',
    assignments: {
      assignment: [
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA01',
          subpositionID: 'FA01'
        },
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FA02',
          subpositionID: 'FA02'
        },
        {
          isReserve: false,
          positionID: 'PO-FA',
          assignmentID: 'FM01',
          subpositionID: 'FM01'
        }
      ],
      assignmentCount: 3
    },
    positionType: 'F',
    destAirportID: 'AP-IAH',
    origAirportID: 'AP-IAH',
    airlineSpecificProperties: {
      property: [
        {
          name: 'Subpositions',
          value: 'FA01FA02FM01'
        }
      ],
      propertyCount: 1
    }
  }
];

export const passengerConnectionMock = [
  {
    version: 1,
    identifier:
      'PC-FL_CO__0008__20100524__NRT__EWR__0-FL_CO__0040__20100524__EWR__FCO__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 3,
          compartment: 'FIRST'
        },
        {
          count: 13,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181108-EWR-FCO-40',
    connectFromFlightID: 'FL-CO-20181108-NRT-EWR-8',
    passengerConnectionID:
      'PC-FL_CO__0008__20100524__NRT__EWR__0-FL_CO__0040__20100524__EWR__FCO__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0008__20100524__NRT__EWR__0-FL_CO__1881__20100524__EWR__SEA__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 1,
          compartment: 'FIRST'
        },
        {
          count: 11,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181108-EWR-SEA-1881',
    connectFromFlightID: 'FL-CO-20181108-NRT-EWR-8',
    passengerConnectionID:
      'PC-FL_CO__0008__20100524__NRT__EWR__0-FL_CO__1881__20100524__EWR__SEA__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0008__20100525__NRT__EWR__0-FL_CO__0040__20100525__EWR__FCO__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 1,
          compartment: 'FIRST'
        },
        {
          count: 15,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181109-EWR-FCO-40',
    connectFromFlightID: 'FL-CO-20181109-NRT-EWR-8',
    passengerConnectionID:
      'PC-FL_CO__0008__20100525__NRT__EWR__0-FL_CO__0040__20100525__EWR__FCO__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0009__20100523__EWR__NRT__0-FL_CO__0006__20100524__NRT__IAH__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 5,
          compartment: 'FIRST'
        },
        {
          count: 21,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181108-NRT-IAH-6',
    connectFromFlightID: 'FL-CO-20181107-EWR-NRT-9',
    passengerConnectionID:
      'PC-FL_CO__0009__20100523__EWR__NRT__0-FL_CO__0006__20100524__NRT__IAH__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0009__20100523__EWR__NRT__0-FL_CO__0007__20100524__NRT__GUM__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 5,
          compartment: 'FIRST'
        },
        {
          count: 21,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181108-NRT-GUM-7',
    connectFromFlightID: 'FL-CO-20181107-EWR-NRT-9',
    passengerConnectionID:
      'PC-FL_CO__0009__20100523__EWR__NRT__0-FL_CO__0007__20100524__NRT__GUM__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0009__20100523__EWR__NRT__0-FL_CO__0962__20100525__NRT__GUM__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 3,
          compartment: 'FIRST'
        },
        {
          count: 20,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181109-NRT-GUM-962',
    connectFromFlightID: 'FL-CO-20181107-EWR-NRT-9',
    passengerConnectionID:
      'PC-FL_CO__0009__20100523__EWR__NRT__0-FL_CO__0962__20100525__NRT__GUM__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0009__20100523__EWR__NRT__0-FL_CO__0964__20100524__NRT__GUM__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 5,
          compartment: 'FIRST'
        },
        {
          count: 21,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181108-NRT-GUM-964',
    connectFromFlightID: 'FL-CO-20181107-EWR-NRT-9',
    passengerConnectionID:
      'PC-FL_CO__0009__20100523__EWR__NRT__0-FL_CO__0964__20100524__NRT__GUM__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0009__20100524__BOS__EWR__0-FL_CO__0304__20100524__EWR__PDX__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 4,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 1
    },
    connectToFlightID: 'FL-CO-20181108-EWR-PDX-304',
    connectFromFlightID: 'FL-CO-20181108-BOS-EWR-9',
    passengerConnectionID:
      'PC-FL_CO__0009__20100524__BOS__EWR__0-FL_CO__0304__20100524__EWR__PDX__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0009__20100524__BOS__EWR__0-FL_CO__0525__20100524__EWR__CLE__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 4,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 1
    },
    connectToFlightID: 'FL-CO-20181108-EWR-CLE-525',
    connectFromFlightID: 'FL-CO-20181108-BOS-EWR-9',
    passengerConnectionID:
      'PC-FL_CO__0009__20100524__BOS__EWR__0-FL_CO__0525__20100524__EWR__CLE__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0009__20100524__BOS__EWR__0-FL_CO__0613__20100524__EWR__LAX__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 2,
          compartment: 'FIRST'
        },
        {
          count: 5,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181108-EWR-LAX-613',
    connectFromFlightID: 'FL-CO-20181108-BOS-EWR-9',
    passengerConnectionID:
      'PC-FL_CO__0009__20100524__BOS__EWR__0-FL_CO__0613__20100524__EWR__LAX__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0009__20100524__EWR__NRT__0-FL_CO__0006__20100525__NRT__IAH__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 4,
          compartment: 'FIRST'
        },
        {
          count: 19,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181109-NRT-IAH-6',
    connectFromFlightID: 'FL-CO-20181108-EWR-NRT-9',
    passengerConnectionID:
      'PC-FL_CO__0009__20100524__EWR__NRT__0-FL_CO__0006__20100525__NRT__IAH__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0009__20100524__EWR__NRT__0-FL_CO__0007__20100525__NRT__GUM__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 4,
          compartment: 'FIRST'
        },
        {
          count: 19,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181109-NRT-GUM-7',
    connectFromFlightID: 'FL-CO-20181108-EWR-NRT-9',
    passengerConnectionID:
      'PC-FL_CO__0009__20100524__EWR__NRT__0-FL_CO__0007__20100525__NRT__GUM__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0009__20100524__EWR__NRT__0-FL_CO__0964__20100525__NRT__GUM__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 4,
          compartment: 'FIRST'
        },
        {
          count: 19,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181109-NRT-GUM-964',
    connectFromFlightID: 'FL-CO-20181108-EWR-NRT-9',
    passengerConnectionID:
      'PC-FL_CO__0009__20100524__EWR__NRT__0-FL_CO__0964__20100525__NRT__GUM__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0009__20100525__BOS__EWR__0-FL_CO__0304__20100525__EWR__PDX__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 1,
          compartment: 'FIRST'
        },
        {
          count: 4,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181109-EWR-PDX-304',
    connectFromFlightID: 'FL-CO-20181109-BOS-EWR-9',
    passengerConnectionID:
      'PC-FL_CO__0009__20100525__BOS__EWR__0-FL_CO__0304__20100525__EWR__PDX__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0009__20100525__BOS__EWR__0-FL_CO__0525__20100525__EWR__CLE__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 1,
          compartment: 'FIRST'
        },
        {
          count: 4,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181109-EWR-CLE-525',
    connectFromFlightID: 'FL-CO-20181109-BOS-EWR-9',
    passengerConnectionID:
      'PC-FL_CO__0009__20100525__BOS__EWR__0-FL_CO__0525__20100525__EWR__CLE__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0009__20100525__BOS__EWR__0-FL_CO__1076__20100525__EWR__RSW__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 3,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 1
    },
    connectToFlightID: 'FL-CO-20181109-EWR-RSW-1076',
    connectFromFlightID: 'FL-CO-20181109-BOS-EWR-9',
    passengerConnectionID:
      'PC-FL_CO__0009__20100525__BOS__EWR__0-FL_CO__1076__20100525__EWR__RSW__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0012__20100523__HNL__LAX__0-FL_CO__0040__20100524__LAX__EWR__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 2,
          compartment: 'FIRST'
        },
        {
          count: 15,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181108-LAX-EWR-40',
    connectFromFlightID: 'FL-CO-20181107-HNL-LAX-12',
    passengerConnectionID:
      'PC-FL_CO__0012__20100523__HNL__LAX__0-FL_CO__0040__20100524__LAX__EWR__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0012__20100523__HNL__LAX__0-FL_CO__0194__20100524__LAX__IAH__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 2,
          compartment: 'FIRST'
        },
        {
          count: 15,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181108-LAX-IAH-194',
    connectFromFlightID: 'FL-CO-20181107-HNL-LAX-12',
    passengerConnectionID:
      'PC-FL_CO__0012__20100523__HNL__LAX__0-FL_CO__0194__20100524__LAX__IAH__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0012__20100523__HNL__LAX__0-FL_CO__0294__20100524__LAX__IAH__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 2,
          compartment: 'FIRST'
        },
        {
          count: 15,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181108-LAX-IAH-294',
    connectFromFlightID: 'FL-CO-20181107-HNL-LAX-12',
    passengerConnectionID:
      'PC-FL_CO__0012__20100523__HNL__LAX__0-FL_CO__0294__20100524__LAX__IAH__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0012__20100523__HNL__LAX__0-FL_CO__0750__20100524__LAX__CLE__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 2,
          compartment: 'FIRST'
        },
        {
          count: 15,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181108-LAX-CLE-750',
    connectFromFlightID: 'FL-CO-20181107-HNL-LAX-12',
    passengerConnectionID:
      'PC-FL_CO__0012__20100523__HNL__LAX__0-FL_CO__0750__20100524__LAX__CLE__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0012__20100523__HNL__LAX__0-FL_CO__1703__20100524__LAX__EWR__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 14,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 1
    },
    connectToFlightID: 'FL-CO-20181108-LAX-EWR-1703',
    connectFromFlightID: 'FL-CO-20181107-HNL-LAX-12',
    passengerConnectionID:
      'PC-FL_CO__0012__20100523__HNL__LAX__0-FL_CO__1703__20100524__LAX__EWR__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0012__20100524__HNL__LAX__0-FL_CO__0040__20100525__LAX__EWR__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 1,
          compartment: 'FIRST'
        },
        {
          count: 18,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181109-LAX-EWR-40',
    connectFromFlightID: 'FL-CO-20181108-HNL-LAX-12',
    passengerConnectionID:
      'PC-FL_CO__0012__20100524__HNL__LAX__0-FL_CO__0040__20100525__LAX__EWR__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0012__20100524__HNL__LAX__0-FL_CO__0194__20100525__LAX__IAH__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 1,
          compartment: 'FIRST'
        },
        {
          count: 18,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181109-LAX-IAH-194',
    connectFromFlightID: 'FL-CO-20181108-HNL-LAX-12',
    passengerConnectionID:
      'PC-FL_CO__0012__20100524__HNL__LAX__0-FL_CO__0194__20100525__LAX__IAH__0'
  },
  {
    version: 1,
    identifier:
      'PC-FL_CO__0012__20100524__HNL__LAX__0-FL_CO__0750__20100525__LAX__CLE__0',
    compartmentCounts: {
      compartmentCount: [
        {
          count: 1,
          compartment: 'FIRST'
        },
        {
          count: 18,
          compartment: 'COACH'
        }
      ],
      compartmentCountCount: 2
    },
    connectToFlightID: 'FL-CO-20181109-LAX-CLE-750',
    connectFromFlightID: 'FL-CO-20181108-HNL-LAX-12',
    passengerConnectionID:
      'PC-FL_CO__0012__20100524__HNL__LAX__0-FL_CO__0750__20100525__LAX__CLE__0'
  }
];

export const positionMock = [
  {
    code: 'CA',
    name: 'Captain',
    rank: 0,
    type: 'P',
    version: 1,
    identifier: 'PO-CA',
    positionID: 'PO-CA',
    subpositionList: {
      subposition: [
        {
          code: 'CA01',
          name: 'Captain',
          rank: 0,
          subpositionID: 'CA01'
        },
        {
          code: 'IO01',
          name: 'Initial Operator',
          rank: 0,
          subpositionID: 'IO01'
        }
      ],
      subpositionCount: 2
    }
  },
  {
    code: 'FA',
    name: 'Flight Attendant',
    rank: 5,
    type: 'F',
    version: 1,
    identifier: 'PO-FA',
    positionID: 'PO-FA',
    subpositionList: {
      subposition: [
        {
          code: 'FM01',
          name: 'Flight Manager',
          rank: 0,
          subpositionID: 'FM01'
        },
        {
          code: 'FA01',
          name: 'Flight Attendant 1',
          rank: 1,
          subpositionID: 'FA01'
        },
        {
          code: 'FA02',
          name: 'Flight Attendant 2',
          rank: 2,
          subpositionID: 'FA02'
        },
        {
          code: 'FA03',
          name: 'Flight Attendant 3',
          rank: 3,
          subpositionID: 'FA03'
        },
        {
          code: 'FA04',
          name: 'Flight Attendant 4',
          rank: 4,
          subpositionID: 'FA04'
        },
        {
          code: 'FA05',
          name: 'Flight Attendant 5',
          rank: 5,
          subpositionID: 'FA05'
        },
        {
          code: 'FA06',
          name: 'Flight Attendant 6',
          rank: 6,
          subpositionID: 'FA06'
        },
        {
          code: 'FA07',
          name: 'Flight Attendant 7',
          rank: 7,
          subpositionID: 'FA07'
        },
        {
          code: 'FA08',
          name: 'Flight Attendant 8',
          rank: 8,
          subpositionID: 'FA08'
        },
        {
          code: 'FA09',
          name: 'Flight Attendant 9',
          rank: 9,
          subpositionID: 'FA09'
        },
        {
          code: 'FA10',
          name: 'Flight Attendant 10',
          rank: 10,
          subpositionID: 'FA10'
        },
        {
          code: 'FA11',
          name: 'Flight Attendant 11',
          rank: 11,
          subpositionID: 'FA11'
        },
        {
          code: 'FA12',
          name: 'Flight Attendant 12',
          rank: 12,
          subpositionID: 'FA12'
        },
        {
          code: 'FA13',
          name: 'Flight Attendant 13',
          rank: 13,
          subpositionID: 'FA13'
        },
        {
          code: 'FA14',
          name: 'Flight Attendant 14',
          rank: 14,
          subpositionID: 'FA14'
        },
        {
          code: 'FA15',
          name: 'Flight Attendant 15',
          rank: 15,
          subpositionID: 'FA15'
        }
      ],
      subpositionCount: 16
    }
  },
  {
    code: 'FO',
    name: '1st Officer',
    rank: 1,
    type: 'P',
    version: 1,
    identifier: 'PO-FO',
    positionID: 'PO-FO',
    subpositionList: {
      subposition: [
        {
          code: 'FO01',
          name: '1st Officer',
          rank: 0,
          subpositionID: 'FO01'
        },
        {
          code: 'IO01',
          name: 'Initial Operator',
          rank: 0,
          subpositionID: 'IO01'
        }
      ],
      subpositionCount: 2
    }
  },
  {
    code: 'SO',
    name: '2nd Officer',
    rank: 2,
    type: 'P',
    version: 1,
    identifier: 'PO-SO',
    positionID: 'PO-SO'
  }
];

export const qualificationMock = [
  {
    name: 'SEAT B737 300 CA',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-CA'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B737-300-CA',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B737-300'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B737-300-CA',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B737 300 FO',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-FO'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B737-300-FO',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B737-300'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B737-300-FO',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B737 500 CA',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-CA'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B737-500-CA',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B737-500'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B737-500-CA',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B737 500 FO',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-FO'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B737-500-FO',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B737-500'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B737-500-FO',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B737 700 CA',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-CA'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B737-700-CA',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B737-700'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B737-700-CA',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B737 700 FO',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-FO'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B737-700-FO',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B737-700'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B737-700-FO',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B737 800 CA',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-CA'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B737-800-CA',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B737-800'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B737-800-CA',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B737 800 FO',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-FO'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B737-800-FO',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B737-800'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B737-800-FO',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B737 900 CA',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-CA'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B737-900-CA',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B737-900'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B737-900-CA',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B737 900 FO',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-FO'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B737-900-FO',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B737-900'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B737-900-FO',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B757 200 CA',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-CA'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B757-200-CA',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B757-200'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B757-200-CA',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B757 200 FO',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-FO'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B757-200-FO',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B757-200'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B757-200-FO',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B757 300 CA',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-CA'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B757-300-CA',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B757-300'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B757-300-CA',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B757 300 FO',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-FO'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B757-300-FO',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B757-300'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B757-300-FO',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B767 200 CA',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-CA'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B767-200-CA',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B767-200'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B767-200-CA',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B767 200 FO',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-FO'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B767-200-FO',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B767-200'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B767-200-FO',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B767 400 CA',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-CA'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B767-400-CA',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B767-400'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B767-400-CA',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B767 400 FO',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-FO'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B767-400-FO',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B767-400'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B767-400-FO',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B777 200 CA',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-CA'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B777-200-CA',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B777-200'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B777-200-CA',
    verifyIsInEffectAt: 'DEPARTURE'
  },
  {
    name: 'SEAT B777 200 FO',
    version: 1,
    semantics: 'QUALIFICATION',
    crewFilter: {
      crewFilter: [
        {
          operatingCrewFilter: {}
        },
        {
          positionFilter: {
            positionID: 'PO-FO'
          }
        }
      ],
      crewFilterCount: 2
    },
    identifier: 'QU-SEAT-B777-200-FO',
    problemType: 'SEAT',
    problemLevel: 'PROBLEM',
    segmentFilter: {
      segmentFilter: [
        {
          fleetFilter: {
            fleetID: 'FE-B777-200'
          }
        }
      ],
      segmentFilterCount: 1
    },
    qualificationID: 'QU-SEAT-B777-200-FO',
    verifyIsInEffectAt: 'DEPARTURE'
  }
];

export const subfleetMock = [
  {
    code: '733124',
    range: 2520,
    fleetID: 'FE-B737-300',
    version: 1,
    airspeed: 504,
    identifier: 'SF-733124',
    subfleetID: 'SF-733124',
    restFacility: 'NONE',
    subfleetCosts: {
      subfleetCost: [
        {
          type: 'PER_BLOCK_HOUR',
          value: 7451
        },
        {
          type: 'PER_MINUTE_OF_DELAY',
          value: 8
        }
      ],
      subfleetCostCount: 2
    },
    domesticTurnTime: 40,
    cabinComplementList: {
      cabinComplement: [
        {
          serviceType: '',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 2,
                maximum: 4,
                minimum: 2,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'J',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 2,
                maximum: 4,
                minimum: 2,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'C',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 0,
                maximum: 5,
                minimum: 0,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 1
          }
        }
      ],
      cabinComplementCount: 3
    },
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 12,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 112,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    cockpitComplementList: {
      cockpitComplement: [
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 1,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        },
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 2,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        }
      ],
      cockpitComplementCount: 2
    },
    internationalTurnTime: 45
  },
  {
    code: '735114',
    range: 3024,
    fleetID: 'FE-B737-500',
    version: 1,
    airspeed: 504,
    identifier: 'SF-735114',
    subfleetID: 'SF-735114',
    restFacility: 'NONE',
    subfleetCosts: {
      subfleetCost: [
        {
          type: 'PER_BLOCK_HOUR',
          value: 7476
        },
        {
          type: 'PER_MINUTE_OF_DELAY',
          value: 8
        }
      ],
      subfleetCostCount: 2
    },
    domesticTurnTime: 35,
    cabinComplementList: {
      cabinComplement: [
        {
          serviceType: '',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 2,
                maximum: 4,
                minimum: 2,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'J',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 2,
                maximum: 4,
                minimum: 2,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'C',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 0,
                maximum: 5,
                minimum: 0,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 1
          }
        }
      ],
      cabinComplementCount: 3
    },
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 8,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 106,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    cockpitComplementList: {
      cockpitComplement: [
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 1,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        },
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 2,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        }
      ],
      cockpitComplementCount: 2
    },
    internationalTurnTime: 45
  },
  {
    code: '738157',
    range: 3180,
    fleetID: 'FE-B737-800',
    version: 1,
    airspeed: 530,
    identifier: 'SF-738157',
    subfleetID: 'SF-738157',
    restFacility: 'NONE',
    subfleetCosts: {
      subfleetCost: [
        {
          type: 'PER_BLOCK_HOUR',
          value: 7547
        },
        {
          type: 'PER_MINUTE_OF_DELAY',
          value: 8
        }
      ],
      subfleetCostCount: 2
    },
    domesticTurnTime: 45,
    cabinComplementList: {
      cabinComplement: [
        {
          serviceType: '',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 3,
                maximum: 5,
                minimum: 3,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'J',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 3,
                maximum: 5,
                minimum: 3,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'C',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 0,
                maximum: 6,
                minimum: 0,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 1
          }
        }
      ],
      cabinComplementCount: 3
    },
    cockpitComplementList: {
      cockpitComplement: [
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 1,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        },
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 2,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        }
      ],
      cockpitComplementCount: 2
    },
    internationalTurnTime: 50
  },
  {
    code: '738160',
    range: 3180,
    fleetID: 'FE-B737-800',
    version: 1,
    airspeed: 530,
    identifier: 'SF-738160',
    subfleetID: 'SF-738160',
    restFacility: 'NONE',
    subfleetCosts: {
      subfleetCost: [
        {
          type: 'PER_BLOCK_HOUR',
          value: 7547
        },
        {
          type: 'PER_MINUTE_OF_DELAY',
          value: 8
        }
      ],
      subfleetCostCount: 2
    },
    domesticTurnTime: 45,
    cabinComplementList: {
      cabinComplement: [
        {
          serviceType: '',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 3,
                maximum: 5,
                minimum: 3,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'J',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 3,
                maximum: 5,
                minimum: 3,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'C',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 0,
                maximum: 6,
                minimum: 0,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 1
          }
        }
      ],
      cabinComplementCount: 3
    },
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 16,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 144,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    cockpitComplementList: {
      cockpitComplement: [
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 1,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        },
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 2,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        }
      ],
      cockpitComplementCount: 2
    },
    internationalTurnTime: 50
  },
  {
    code: '739169',
    range: 3180,
    fleetID: 'FE-B737-900',
    version: 1,
    airspeed: 530,
    identifier: 'SF-739169',
    subfleetID: 'SF-739169',
    restFacility: 'NONE',
    subfleetCosts: {
      subfleetCost: [
        {
          type: 'PER_BLOCK_HOUR',
          value: 7981
        },
        {
          type: 'PER_MINUTE_OF_DELAY',
          value: 8
        }
      ],
      subfleetCostCount: 2
    },
    domesticTurnTime: 50,
    cabinComplementList: {
      cabinComplement: [
        {
          serviceType: '',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 3,
                maximum: 6,
                minimum: 3,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'J',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 3,
                maximum: 6,
                minimum: 3,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'C',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 0,
                maximum: 7,
                minimum: 0,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 1
          }
        }
      ],
      cabinComplementCount: 3
    },
    cockpitComplementList: {
      cockpitComplement: [
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 1,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        },
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 2,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        }
      ],
      cockpitComplementCount: 2
    },
    internationalTurnTime: 60
  },
  {
    code: '739173',
    range: 3180,
    fleetID: 'FE-B737-900',
    version: 1,
    airspeed: 530,
    identifier: 'SF-739173',
    subfleetID: 'SF-739173',
    restFacility: 'NONE',
    subfleetCosts: {
      subfleetCost: [
        {
          type: 'PER_BLOCK_HOUR',
          value: 7981
        },
        {
          type: 'PER_MINUTE_OF_DELAY',
          value: 8
        }
      ],
      subfleetCostCount: 2
    },
    domesticTurnTime: 50,
    cabinComplementList: {
      cabinComplement: [
        {
          serviceType: '',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 3,
                maximum: 6,
                minimum: 3,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'J',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 3,
                maximum: 6,
                minimum: 3,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'C',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 0,
                maximum: 7,
                minimum: 0,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 1
          }
        }
      ],
      cabinComplementCount: 3
    },
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 20,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 153,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    cockpitComplementList: {
      cockpitComplement: [
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 1,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        },
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 2,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        }
      ],
      cockpitComplementCount: 2
    },
    internationalTurnTime: 60
  },
  {
    code: '73E173',
    range: 3180,
    fleetID: 'FE-B737-900',
    version: 1,
    airspeed: 530,
    identifier: 'SF-73E173',
    subfleetID: 'SF-73E173',
    restFacility: 'NONE',
    subfleetCosts: {
      subfleetCost: [
        {
          type: 'PER_BLOCK_HOUR',
          value: 7981
        },
        {
          type: 'PER_MINUTE_OF_DELAY',
          value: 8
        }
      ],
      subfleetCostCount: 2
    },
    domesticTurnTime: 50,
    cabinComplementList: {
      cabinComplement: [
        {
          serviceType: '',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 2,
                maximum: 4,
                minimum: 2,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'J',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 2,
                maximum: 4,
                minimum: 2,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'C',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 0,
                maximum: 5,
                minimum: 0,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 1
          }
        }
      ],
      cabinComplementCount: 3
    },
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 20,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 153,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    cockpitComplementList: {
      cockpitComplement: [
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 1,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        },
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 2,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        }
      ],
      cockpitComplementCount: 2
    },
    internationalTurnTime: 60
  },
  {
    code: '73G124',
    range: 3180,
    fleetID: 'FE-B737-700',
    version: 1,
    airspeed: 530,
    identifier: 'SF-73G124',
    subfleetID: 'SF-73G124',
    restFacility: 'NONE',
    subfleetCosts: {
      subfleetCost: [
        {
          type: 'PER_BLOCK_HOUR',
          value: 6915
        },
        {
          type: 'PER_MINUTE_OF_DELAY',
          value: 8
        }
      ],
      subfleetCostCount: 2
    },
    domesticTurnTime: 40,
    cabinComplementList: {
      cabinComplement: [
        {
          serviceType: '',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 2,
                maximum: 4,
                minimum: 2,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'J',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 2,
                maximum: 4,
                minimum: 2,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'C',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 0,
                maximum: 5,
                minimum: 0,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 1
          }
        }
      ],
      cabinComplementCount: 3
    },
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 12,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 112,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    cockpitComplementList: {
      cockpitComplement: [
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 1,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        },
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 2,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        }
      ],
      cockpitComplementCount: 2
    },
    internationalTurnTime: 45
  },
  {
    code: '73K114',
    range: 3024,
    fleetID: 'FE-B737-500',
    version: 1,
    airspeed: 504,
    identifier: 'SF-73K114',
    subfleetID: 'SF-73K114',
    restFacility: 'NONE',
    subfleetCosts: {
      subfleetCost: [
        {
          type: 'PER_BLOCK_HOUR',
          value: 7476
        },
        {
          type: 'PER_MINUTE_OF_DELAY',
          value: 8
        }
      ],
      subfleetCostCount: 2
    },
    domesticTurnTime: 35,
    cabinComplementList: {
      cabinComplement: [
        {
          serviceType: '',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 2,
                maximum: 4,
                minimum: 2,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'J',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 2,
                maximum: 4,
                minimum: 2,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'C',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 0,
                maximum: 5,
                minimum: 0,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 1
          }
        }
      ],
      cabinComplementCount: 3
    },
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 8,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 106,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    cockpitComplementList: {
      cockpitComplement: [
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 1,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        },
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 2,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        }
      ],
      cockpitComplementCount: 2
    },
    internationalTurnTime: 45
  },
  {
    code: '73M155',
    range: 3180,
    fleetID: 'FE-B737-800',
    version: 1,
    airspeed: 530,
    identifier: 'SF-73M155',
    subfleetID: 'SF-73M155',
    restFacility: 'NONE',
    subfleetCosts: {
      subfleetCost: [
        {
          type: 'PER_BLOCK_HOUR',
          value: 7547
        },
        {
          type: 'PER_MINUTE_OF_DELAY',
          value: 8
        }
      ],
      subfleetCostCount: 2
    },
    domesticTurnTime: 45,
    cabinComplementList: {
      cabinComplement: [
        {
          serviceType: '',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 3,
                maximum: 5,
                minimum: 3,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'J',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 1,
                maximum: 1,
                minimum: 1,
                positionID: 'PO-FA',
                subpositionID: 'FM01'
              },
              {
                count: 3,
                maximum: 5,
                minimum: 3,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 2
          }
        },
        {
          serviceType: 'C',
          cabinPositionCountList: {
            cabinPositionCount: [
              {
                count: 0,
                maximum: 6,
                minimum: 0,
                positionID: 'PO-FA'
              }
            ],
            cabinPositionCountCount: 1
          }
        }
      ],
      cabinComplementCount: 3
    },
    passengerCapacities: {
      passengerCapacity: [
        {
          count: 14,
          passengerClass: 'FIRST'
        },
        {
          count: 0,
          passengerClass: 'BUSINESS'
        },
        {
          count: 141,
          passengerClass: 'COACH'
        }
      ],
      passengerCapacityCount: 3
    },
    cockpitComplementList: {
      cockpitComplement: [
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 1,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        },
        {
          cockpitPositionCountList: {
            cockpitPositionCount: [
              {
                count: 1,
                positionID: 'PO-CA'
              },
              {
                count: 2,
                positionID: 'PO-FO'
              }
            ],
            cockpitPositionCountCount: 2
          }
        }
      ],
      cockpitComplementCount: 2
    },
    internationalTurnTime: 50
  }
];

export const trainingMock = [];
