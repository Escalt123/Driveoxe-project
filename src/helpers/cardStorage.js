import horizon from "../img/horizon.png";
import zephyr from "../img/zephyr.png";
import aurora from "../img/aurora.png";
import VanguardCX2 from "../img/VanguardCX2.png";
import stellar from "../img/stellar.png";
import VanguardCClas from "../img/VanguardCClas.png";
import EquinoxFEclipse from "../img/EquinoxFEclipse.png";
import RadiantSolstice from "../img/RadiantSolstice.png";
import ZenithTempest from "../img/ZenithTempest.png";


// поле id должно иметь уникальное значение для каждого объекта

const cardStorage = [
    {   
        id: 1,
        carImage: horizon,
        carName: "Horizon Mirage Convertible",
        carPrice: "49",
        categories: "Hatchback",
        tag: "Sedan",
    },
    {
        id: 2,
        carImage: zephyr,
        carName: "Zephyr A4 Stratos",
        carPrice: "$79",
        categories: "Coupe",
        tag: "Sedan",
    },
    {
        id: 3,
        carImage: aurora,
        carName: "Aurora X5 Nebula",
        carPrice: "$99",
        categories: "Station Wagon",
    },
    {
        id: 4,
        carImage: VanguardCX2,
        carName: "Vanguard CX2 Convertible",
        carPrice: "$59",
        categories: "Coupe",
        tag: "Sedan",
    },
    {
        id: 5,
        carImage: stellar,
        carFirstLine: "Stellar Orion",
        carSecondLine: "Hybrid",
        carName: "Stellar Orion \n Hybrid",
        carPrice: "$39",
        tag: "Sedan",
        categories: "Station Wagon",
    },
    {
        id: 6,
        carImage: VanguardCClas,
        carName: "Vanguard \n C-Class Coupe",
        carPrice: "$69",
        tag: "Family Car",
    },
    {
        id: 7,
        carImage: EquinoxFEclipse,
        carName: "Equinox F-Eclipse",
        carPrice: "$109",
    },
    {
        id: 8,
        carImage: RadiantSolstice,
        carName: "Radiant Solstice \n Automobiles",
        carPrice: "$89",
        
    },
    {
        id: 9,
        carImage: ZenithTempest,
        carName: "Zenith Tempest",
        carPrice: "$129",
        categories: "Hatchback",
        tag: "Affordable",
    },
    {
        id: 10,
        carImage: RadiantSolstice,
        carName: "Radiant Solstice \n Automobiles",
        carPrice: "$89",
        categories: "Hatchback",
        tag: "Family Car",
    },
    {
        id: 11,
        carImage: ZenithTempest,
        carName: "Zenith Tempest",
        carPrice: "$129",
        categories: "Hatchback",
        tag: "Family Car",
    },
    //--------------------------------------------------------

    // {
    //     carImage: horizon,
    //     carName: "Horizon Mirage Convertible",
    //     carPrice: "49",
    // },
    // {
    //     carImage: zephyr,
    //     carName: "Zephyr A4 Stratos",
    //     carPrice: "$79",
    // },
    // {
    //     carImage: aurora,
    //     carName: "Aurora X5 Nebula",
    //     carPrice: "$99",
    // },
    // {
    //     carImage: VanguardCX2,
    //     carName: "Vanguard CX2 Convertible",
    //     carPrice: "$59",
    // },
    // {
    //     carImage: stellar,
    //     carFirstLine: "Stellar Orion",
    //     carSecondLine: "Hybrid",
    //     carName: "Stellar Orion \n Hybrid",
    //     carPrice: "$39",
    // },
    // {
    //     carImage: VanguardCClas,
    //     carName: "Vanguard \n C-Class Coupe",
    //     carPrice: "$69",
    // },
    // {
    //     carImage: EquinoxFEclipse,
    //     carName: "Equinox F-Eclipse",
    //     carPrice: "$109",
    // },
    // {
    //     carImage: RadiantSolstice,
    //     carName: "Radiant Solstice \n Automobiles",
    //     carPrice: "$89",
    // },
    // {
    //     carImage: ZenithTempest,
    //     carName: "Zenith Tempest",
    //     carPrice: "$129",
    // },    {
    //     carImage: horizon,
    //     carName: "Horizon Mirage Convertible",
    //     carPrice: "49",
    // },
    // {
    //     carImage: zephyr,
    //     carName: "Zephyr A4 Stratos",
    //     carPrice: "$79",
    // },
    // {
    //     carImage: aurora,
    //     carName: "Aurora X5 Nebula",
    //     carPrice: "$99",
    // },
    // {
    //     carImage: VanguardCX2,
    //     carName: "Vanguard CX2 Convertible",
    //     carPrice: "$59",
    // },
    // {
    //     carImage: stellar,
    //     carFirstLine: "Stellar Orion",
    //     carSecondLine: "Hybrid",
    //     carName: "Stellar Orion \n Hybrid",
    //     carPrice: "$39",
    // },
    // {
    //     carImage: VanguardCClas,
    //     carName: "Vanguard \n C-Class Coupe",
    //     carPrice: "$69",
    // },
    // {
    //     carImage: EquinoxFEclipse,
    //     carName: "Equinox F-Eclipse",
    //     carPrice: "$109",
    // },
    // {
    //     carImage: RadiantSolstice,
    //     carName: "Radiant Solstice \n Automobiles",
    //     carPrice: "$89",
    // },
    // {
    //     carImage: ZenithTempest,
    //     carName: "Zenith Tempest",
    //     carPrice: "$129",
    // },    {
    //     carImage: horizon,
    //     carName: "Horizon Mirage Convertible",
    //     carPrice: "49",
    // },
    // {
    //     carImage: zephyr,
    //     carName: "Zephyr A4 Stratos",
    //     carPrice: "$79",
    // },
    // {
    //     carImage: aurora,
    //     carName: "Aurora X5 Nebula",
    //     carPrice: "$99",
    // },
    // {
    //     carImage: VanguardCX2,
    //     carName: "Vanguard CX2 Convertible",
    //     carPrice: "$59",
    // },
    // {
    //     carImage: stellar,
    //     carFirstLine: "Stellar Orion",
    //     carSecondLine: "Hybrid",
    //     carName: "Stellar Orion \n Hybrid",
    //     carPrice: "$39",
    // },
    // {
    //     carImage: VanguardCClas,
    //     carName: "Vanguard \n C-Class Coupe",
    //     carPrice: "$69",
    // },
    // {
    //     carImage: EquinoxFEclipse,
    //     carName: "Equinox F-Eclipse",
    //     carPrice: "$109",
    // },
    // {
    //     carImage: RadiantSolstice,
    //     carName: "Radiant Solstice \n Automobiles",
    //     carPrice: "$89",
    // },
    // {
    //     carImage: ZenithTempest,
    //     carName: "Zenith Tempest",
    //     carPrice: "$129",
    // },    {
    //     carImage: horizon,
    //     carName: "Horizon Mirage Convertible",
    //     carPrice: "49",
    // },
    // {
    //     carImage: zephyr,
    //     carName: "Zephyr A4 Stratos",
    //     carPrice: "$79",
    // },
    // {
    //     carImage: aurora,
    //     carName: "Aurora X5 Nebula",
    //     carPrice: "$99",
    // },
    // {
    //     carImage: VanguardCX2,
    //     carName: "Vanguard CX2 Convertible",
    //     carPrice: "$59",
    // },
    // {
    //     carImage: stellar,
    //     carFirstLine: "Stellar Orion",
    //     carSecondLine: "Hybrid",
    //     carName: "Stellar Orion \n Hybrid",
    //     carPrice: "$39",
    // },
    // {
    //     carImage: VanguardCClas,
    //     carName: "Vanguard \n C-Class Coupe",
    //     carPrice: "$69",
    // },
    // {
    //     carImage: EquinoxFEclipse,
    //     carName: "Equinox F-Eclipse",
    //     carPrice: "$109",
    // },
    // {
    //     carImage: RadiantSolstice,
    //     carName: "Radiant Solstice \n Automobiles",
    //     carPrice: "$89",
    // },
    // {
    //     carImage: ZenithTempest,
    //     carName: "Zenith Tempest",
    //     carPrice: "$129",
    // },    {
    //     carImage: horizon,
    //     carName: "Horizon Mirage Convertible",
    //     carPrice: "49",
    // },
    // {
    //     carImage: zephyr,
    //     carName: "Zephyr A4 Stratos",
    //     carPrice: "$79",
    // },
    // {
    //     carImage: aurora,
    //     carName: "Aurora X5 Nebula",
    //     carPrice: "$99",
    // },
    // {
    //     carImage: VanguardCX2,
    //     carName: "Vanguard CX2 Convertible",
    //     carPrice: "$59",
    // },
    // {
    //     carImage: stellar,
    //     carFirstLine: "Stellar Orion",
    //     carSecondLine: "Hybrid",
    //     carName: "Stellar Orion \n Hybrid",
    //     carPrice: "$39",
    // },
    // {
    //     carImage: VanguardCClas,
    //     carName: "Vanguard \n C-Class Coupe",
    //     carPrice: "$69",
    // },
    // {
    //     carImage: EquinoxFEclipse,
    //     carName: "Equinox F-Eclipse",
    //     carPrice: "$109",
    // },
    // {
    //     carImage: RadiantSolstice,
    //     carName: "Radiant Solstice \n Automobiles",
    //     carPrice: "$89",
    // },
    // {
    //     carImage: ZenithTempest,
    //     carName: "Zenith Tempest",
    //     carPrice: "$129", }

    //--------------------------------------------------------
]

export { cardStorage };