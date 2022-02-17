import { Outgoing } from './types';

export function getOutgoings(): Promise<Outgoing[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: '2f9f2242-d717-4c04-b2f5-40d46ae11c48',
                    toFirstName: 'Donna',
                    toLastName: 'Bellon',
                    price: 940.85,
                    date: new Date('2021-11-24T21:00:00.000Z')
                },
                {
                    id: '97eda8dc-0b6c-4200-87e8-8f4f27c59a5b',
                    toFirstName: 'Nikkie',
                    toLastName: 'Winder',
                    price: 2700.02,
                    date: new Date('2021-09-02T21:00:00.000Z')
                },
                {
                    id: 'a12c640e-7c6f-40cb-8da3-3ad6bb1172c8',
                    toFirstName: 'Goldarina',
                    toLastName: 'Maffetti',
                    price: 1665.66,
                    date: new Date('2021-11-07T21:00:00.000Z')
                },
                {
                    id: 'b217ce7b-97ba-48d7-bb3f-8ecdcc0c5228',
                    toFirstName: 'Doti',
                    toLastName: 'Tuley',
                    price: 4689.26,
                    date: new Date('2021-06-06T21:00:00.000Z')
                },
                {
                    id: '385795e5-790e-4681-aefd-6e0de00b6261',
                    toFirstName: 'Amara',
                    toLastName: 'Laden',
                    price: 823.43,
                    date: new Date('2022-01-04T21:00:00.000Z')
                },
                {
                    id: '345be9d8-5117-41b9-909b-3fd4bdcc8515',
                    toFirstName: 'Dari',
                    toLastName: 'Quail',
                    price: 3181.86,
                    date: new Date('2021-04-07T21:00:00.000Z')
                },
                {
                    id: '40a1a8d8-ccd5-4a43-8ab2-778608373556',
                    toFirstName: 'Derick',
                    toLastName: 'Ridgway',
                    price: 3689.64,
                    date: new Date('2021-04-24T21:00:00.000Z')
                },
                {
                    id: 'b566608e-fcf8-408f-a33f-e4fd4f00e501',
                    toFirstName: 'Rhianon',
                    toLastName: 'Charrette',
                    price: 4793.91,
                    date: new Date('2021-12-04T21:00:00.000Z')
                },
                {
                    id: '4900fa60-1346-4364-b47d-62d4217e54f1',
                    toFirstName: 'Corrina',
                    toLastName: 'Skelhorn',
                    price: 4598.92,
                    date: new Date('2021-10-20T21:00:00.000Z')
                },
                {
                    id: 'f3bd181a-25d2-45bc-bad0-ca9faea48256',
                    toFirstName: 'Sharla',
                    toLastName: 'Schohier',
                    price: 4934.68,
                    date: new Date('2021-10-12T21:00:00.000Z')
                },
                {
                    id: '8845c002-d4bb-438c-9240-8b469f620505',
                    toFirstName: 'Donavon',
                    toLastName: 'Rosenhaus',
                    price: 3064.79,
                    date: new Date('2021-06-26T21:00:00.000Z')
                },
                {
                    id: '2150ccec-aeaa-4c3d-ad2b-fc2efdf30ed0',
                    toFirstName: 'Briant',
                    toLastName: 'Lokier',
                    price: 4071.01,
                    date: new Date('2021-12-21T21:00:00.000Z')
                },
                {
                    id: '9b179523-ae9e-49ad-99c7-280080fb5979',
                    toFirstName: 'Art',
                    toLastName: 'Forgie',
                    price: 1896.76,
                    date: new Date('2021-03-10T21:00:00.000Z')
                },
                {
                    id: '9c28fec7-e172-4641-825a-2653ba0d1389',
                    toFirstName: 'Boony',
                    toLastName: 'Heart',
                    price: 4085.21,
                    date: new Date('2021-11-22T21:00:00.000Z')
                },
                {
                    id: '1fb7212c-0087-437a-98c7-8c2589f2ac7c',
                    toFirstName: 'Isadora',
                    toLastName: 'Capron',
                    price: 4456.44,
                    date: new Date('2021-04-15T21:00:00.000Z')
                },
                {
                    id: 'd17b38a6-36a7-42ed-abce-752827b40f5c',
                    toFirstName: 'Jelene',
                    toLastName: 'Lister',
                    price: 4526.28,
                    date: new Date('2021-09-28T21:00:00.000Z')
                },
                {
                    id: '2aa25576-9c2a-4fba-981f-cd186e50f751',
                    toFirstName: 'Ewart',
                    toLastName: 'Renols',
                    price: 3223.72,
                    date: new Date('2021-03-29T21:00:00.000Z')
                },
                {
                    id: '7bb07396-cf3d-4379-82ce-cc90e1326daa',
                    toFirstName: 'Titus',
                    toLastName: 'Selwin',
                    price: 3772.27,
                    date: new Date('2022-01-23T21:00:00.000Z')
                },
                {
                    id: 'cbdf423b-c49e-4d8f-a1a8-8b78639b7fe3',
                    toFirstName: 'Adlai',
                    toLastName: 'Holhouse',
                    price: 4607.32,
                    date: new Date('2021-09-24T21:00:00.000Z')
                },
                {
                    id: '39225fb8-cd6b-4f0c-a92c-a4f3175b6876',
                    toFirstName: 'Yolanda',
                    toLastName: 'Anthoin',
                    price: 467.39,
                    date: new Date('2022-01-01T21:00:00.000Z')
                },
                {
                    id: '542b331f-cf62-4a5b-aa4b-29a07e50fb39',
                    toFirstName: 'Felita',
                    toLastName: 'Harrismith',
                    price: 2842.06,
                    date: new Date('2021-04-21T21:00:00.000Z')
                },
                {
                    id: '54d750fc-0458-4faa-8f87-1f74f85d700b',
                    toFirstName: 'Rriocard',
                    toLastName: 'Scothorne',
                    price: 1034.42,
                    date: new Date('2021-08-03T21:00:00.000Z')
                },
                {
                    id: '85cd3789-a3e0-4823-8bdb-4293b5308044',
                    toFirstName: 'Max',
                    toLastName: 'Cudby',
                    price: 1669.31,
                    date: new Date('2021-12-21T21:00:00.000Z')
                },
                {
                    id: '75c61caa-cd8f-4900-8a59-133e81c89d1c',
                    toFirstName: 'Edeline',
                    toLastName: 'Stappard',
                    price: 1708.03,
                    date: new Date('2021-06-22T21:00:00.000Z')
                },
                {
                    id: 'dcd9e64e-747a-42a3-9763-7c51548e42c6',
                    toFirstName: 'Shanon',
                    toLastName: 'Scrivenor',
                    price: 1602.07,
                    date: new Date('2021-04-25T21:00:00.000Z')
                },
                {
                    id: '28c318a0-03d6-4e7a-b0f5-249fd8497e9a',
                    toFirstName: 'Arvin',
                    toLastName: 'Floyde',
                    price: 4854.23,
                    date: new Date('2021-07-18T21:00:00.000Z')
                },
                {
                    id: 'f736b179-7362-4380-8b49-19e0859c93e9',
                    toFirstName: 'Alessandro',
                    toLastName: 'Gaydon',
                    price: 4289.57,
                    date: new Date('2021-03-02T21:00:00.000Z')
                },
                {
                    id: '6a1f9a28-68d1-4927-b38e-ab7abe84add9',
                    toFirstName: 'Johann',
                    toLastName: 'Lashmar',
                    price: 984.33,
                    date: new Date('2021-08-23T21:00:00.000Z')
                },
                {
                    id: '5a3f95a6-9c01-41c0-b468-b29f8365c183',
                    toFirstName: 'Dunn',
                    toLastName: 'Camblin',
                    price: 4279.08,
                    date: new Date('2021-06-23T21:00:00.000Z')
                },
                {
                    id: '39ad4a06-3c1e-4319-8ef5-ab44625ae739',
                    toFirstName: 'Oliviero',
                    toLastName: 'Bricham',
                    price: 365.6,
                    date: new Date('2021-05-22T21:00:00.000Z')
                },
                {
                    id: '70dd36d2-7603-43b1-b343-4f12f4e35d09',
                    toFirstName: 'Guido',
                    toLastName: 'Harcourt',
                    price: 721.67,
                    date: new Date('2021-05-10T21:00:00.000Z')
                },
                {
                    id: 'c9148f31-4a1a-4c70-a7fd-a841f38812b6',
                    toFirstName: 'Anastassia',
                    toLastName: 'Dorken',
                    price: 2315.53,
                    date: new Date('2021-09-30T21:00:00.000Z')
                },
                {
                    id: '76ebb4f8-0d64-4e5a-9b0b-50d2eec150be',
                    toFirstName: 'Ulberto',
                    toLastName: 'Duesberry',
                    price: 944.04,
                    date: new Date('2021-12-04T21:00:00.000Z')
                },
                {
                    id: '76171bb3-946f-4b97-bde6-8925c59310b5',
                    toFirstName: 'Annalise',
                    toLastName: 'Bennison',
                    price: 57.15,
                    date: new Date('2021-04-03T21:00:00.000Z')
                },
                {
                    id: '4a2fb808-8723-408d-8365-7b9accf45322',
                    toFirstName: 'Trey',
                    toLastName: 'Stebbings',
                    price: 3358.14,
                    date: new Date('2022-01-05T21:00:00.000Z')
                },
                {
                    id: 'aaae8f52-2412-4892-9e90-88ffedeff94d',
                    toFirstName: 'Alie',
                    toLastName: 'Chitter',
                    price: 4832.28,
                    date: new Date('2021-05-04T21:00:00.000Z')
                },
                {
                    id: '9ea86c74-85fe-45ff-9d0c-31720d8b0058',
                    toFirstName: 'Sue',
                    toLastName: 'Bernucci',
                    price: 1181.99,
                    date: new Date('2021-07-03T21:00:00.000Z')
                },
                {
                    id: 'c5d560ea-9614-471b-91e0-b392bbcc5a51',
                    toFirstName: 'Tracee',
                    toLastName: 'Burnall',
                    price: 4272.4,
                    date: new Date('2021-12-26T21:00:00.000Z')
                },
                {
                    id: '20faff38-5498-453f-a8db-6492cbe0b618',
                    toFirstName: 'Cilka',
                    toLastName: 'Colman',
                    price: 426.27,
                    date: new Date('2021-04-04T21:00:00.000Z')
                },
                {
                    id: '8d03f3fd-0e8b-4f7f-bfb4-92df7d7aaff2',
                    toFirstName: 'Micaela',
                    toLastName: 'Pierpoint',
                    price: 682.41,
                    date: new Date('2021-07-18T21:00:00.000Z')
                },
                {
                    id: 'f717a5a6-f92e-4f54-a32d-21cec6feea89',
                    toFirstName: 'Culver',
                    toLastName: 'Glentz',
                    price: 2098.15,
                    date: new Date('2021-05-20T21:00:00.000Z')
                },
                {
                    id: 'fa28dd0a-3c8b-4130-9e95-60b86572dbaf',
                    toFirstName: 'Sinclare',
                    toLastName: 'Pawels',
                    price: 994.66,
                    date: new Date('2021-02-18T21:00:00.000Z')
                },
                {
                    id: 'af3cbdbf-5361-4993-af56-5b150a50ecf0',
                    toFirstName: 'Kiele',
                    toLastName: 'Skeene',
                    price: 2991.02,
                    date: new Date('2022-02-11T21:00:00.000Z')
                },
                {
                    id: '921a95b4-7c56-462d-9a59-83cddd4929a2',
                    toFirstName: 'Ursa',
                    toLastName: 'Bollans',
                    price: 3206.24,
                    date: new Date('2021-04-23T21:00:00.000Z')
                },
                {
                    id: '399e2a62-14a2-4496-bb32-b32f032fec27',
                    toFirstName: 'Andee',
                    toLastName: 'Chamberlaine',
                    price: 209.93,
                    date: new Date('2022-01-06T21:00:00.000Z')
                },
                {
                    id: '6e1ae6d0-70ee-4cbb-8f9b-faa8546ff73e',
                    toFirstName: 'Hugues',
                    toLastName: 'Nossent',
                    price: 3106.52,
                    date: new Date('2021-03-20T21:00:00.000Z')
                },
                {
                    id: '6d0150c5-099d-49ec-b92b-966ff43e100d',
                    toFirstName: 'Leena',
                    toLastName: 'Conyard',
                    price: 2562.96,
                    date: new Date('2021-11-28T21:00:00.000Z')
                },
                {
                    id: '592b955c-7681-47b4-837b-2bf253033c2b',
                    toFirstName: 'Merv',
                    toLastName: 'Stickford',
                    price: 1734.02,
                    date: new Date('2021-09-01T21:00:00.000Z')
                },
                {
                    id: 'b8ebdbf1-2c34-48ec-bf6f-36c91fcf65e0',
                    toFirstName: 'Doug',
                    toLastName: 'Klimpt',
                    price: 773.61,
                    date: new Date('2021-03-12T21:00:00.000Z')
                },
                {
                    id: '55b12c6a-48f5-4207-b430-feb28aab1220',
                    toFirstName: 'Scott',
                    toLastName: 'Pitrelli',
                    price: 2818.42,
                    date: new Date('2021-04-19T21:00:00.000Z')
                }
            ]);
        }, 1500);
    });
}
