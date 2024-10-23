export const recommendationData = [
    {
        location: {
            address: 'Jalan Raya No. 123, Bogor, Indonesia',
            coordinateGMapsUrl: 'https://www.google.com/maps/place/Jalan+Raya+No.+123,+Bogor',
        },
        price: 12000000, // 12 million
        type: 'pertanian',
        size: {
            width: 30, // in meters
            height: 40 // in meters
        },
        publisher: {
            name: 'Budi Santoso',
            email: 'budi.santoso@gmail.com',
            phoneNumber: 6281234567890,
        },
        isNegotable: true,
        isInstallment: true,
        monthInstallment: 12 // 12 months
    },
    {
        location: {
            address: 'Jalan Kebon Kacang No. 45, Jakarta, Indonesia',
            coordinateGMapsUrl: 'https://www.google.com/maps/place/Jalan+Kebon+Kacang+No.+45,+Jakarta',
        },
        price: 25000000, // 25 million
        type: 'padat',
        size: {
            width: 50, // in meters
            height: 50 // in meters
        },
        publisher: {
            name: 'Siti Aminah',
            email: 'siti.aminah@gmail.com',
            phoneNumber: 6289876543210,
        },
        isNegotable: false,
        isInstallment: true,
        monthInstallment: 24 // 24 months
    },
    {
        location: {
            address: 'Jalan Hutan No. 78, Bandung, Indonesia',
            coordinateGMapsUrl: 'https://www.google.com/maps/place/Jalan+Hutan+No.+78,+Bandung',
        },
        price: 5000000, // 5 million
        type: 'hutan',
        size: {
            width: 20, // in meters
            height: 30 // in meters
        },
        publisher: {
            name: 'Andi Prasetyo',
            email: 'andi.prasetyo@gmail.com',
            phoneNumber: 6287654321098,
        },
        isNegotable: true,
        isInstallment: false,
        monthInstallment: 0 // not applicable
    },
    {
        location: {
            address: 'Jalan Gunung No. 12, Yogyakarta, Indonesia',
            coordinateGMapsUrl: 'https://www.google.com/maps/place/Jalan+Gunung+No.+12,+Yogyakarta',
        },
        price: 18000000, // 18 million
        type: 'gunung',
        size: {
            width: 40, // in meters
            height: 50 // in meters
        },
        publisher: {
            name: 'Rina Susanti',
            email: 'rina.susanti@gmail.com',
            phoneNumber: 6282345678901,
        },
        isNegotable: false,
        isInstallment: true,
        monthInstallment: 18 // 18 months
    }
];