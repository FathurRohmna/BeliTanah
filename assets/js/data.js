export const recommendationData = [
    {
        id: 1,
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
            phoneNumber: 6283867886915,
        },
        isNegotable: true,
        isInstallment: true,
        monthInstallment: 12, // 12 months
        imgUrl: 'https://images.unsplash.com/photo-1669003154058-e1876138ac3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZCUyMGZvciUyMHNhbGV8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 2,
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
            phoneNumber: 6283867886915,
        },
        isNegotable: false,
        isInstallment: true,
        monthInstallment: 24, // 24 months
        imgUrl: 'https://images.unsplash.com/photo-1669003152238-5bd17a5bb19c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZCUyMGZvciUyMHNhbGV8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 3,
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
            phoneNumber: 6283867886915,
        },
        isNegotable: true,
        isInstallment: false,
        monthInstallment: 0, // not applicable
        imgUrl: 'https://images.unsplash.com/photo-1669003152899-a11941e54f5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZCUyMGZvciUyMHNhbGV8ZW58MHx8MHx8fDA%3D'
    },
    {
        id:4,
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
            phoneNumber: 6283867886915,
        },
        isNegotable: false,
        isInstallment: true,
        monthInstallment: 18, // 18 months
        imgUrl: 'https://images.unsplash.com/photo-1481184094322-6b9e783d91ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmQlMjBmb3IlMjBzYWxlfGVufDB8fDB8fHww'
    },
    {
        id: 5,
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
        monthInstallment: 18, // 18 months
        imgUrl: 'https://images.unsplash.com/photo-1601622962666-d0b6d43a7ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhbmQlMjBmb3IlMjBzYWxlfGVufDB8fDB8fHww'
    },
];

export const listTanah = [
    ...recommendationData,
    {
        id: 6,
        location: {
            address: 'Jalan Merapi No. 15, Yogyakarta, Indonesia',
            coordinateGMapsUrl: 'https://www.google.com/maps/place/Jalan+Merapi+No.+15,+Yogyakarta',
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
            phoneNumber: 6283867886915,
        },
        isNegotable: false,
        isInstallment: true,
        monthInstallment: 18, // 18 months
        imgUrl: 'https://images.unsplash.com/photo-1606864034826-111e5945de8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhbmQlMjBmb3IlMjBzYWxlfGVufDB8fDB8fHww'
    },
    {
        id: 7,
        location: {
            address: 'Jalan Semeru No. 20, Yogyakarta, Indonesia',
            coordinateGMapsUrl: 'https://www.google.com/maps/place/Jalan+Semeru+No.+20,+Yogyakarta',
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
            phoneNumber: 6283867886915,
        },
        isNegotable: false,
        isInstallment: true,
        monthInstallment: 18, // 18 months
        imgUrl: 'https://plus.unsplash.com/premium_photo-1663946642504-2cd0aeb17ad9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhbmQlMjBmb3IlMjBzYWxlfGVufDB8fDB8fHww'
    },
    {
        id: 8,
        location: {
            address: 'Jalan Sumbing No. 25, Yogyakarta, Indonesia',
            coordinateGMapsUrl: 'https://www.google.com/maps/place/Jalan+Sumbing+No.+25,+Yogyakarta',
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
            phoneNumber: 6283867886915,
        },
        isNegotable: false,
        isInstallment: true,
        monthInstallment: 18, // 18 months
        imgUrl: 'https://images.unsplash.com/photo-1607420824184-b8ac26af096c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmQlMjBmb3IlMjBzYWxlfGVufDB8fDB8fHww'
    }
]