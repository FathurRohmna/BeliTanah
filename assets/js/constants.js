export const createBeliTanahTemplate = ({
  address,
  coordinateGMapsUrl,
  price,
  size,
  isNegotable,
  isInstallment,
  monthInstallment,
  negotiablePrice,
}) => {
  return `Halo! Saya tertarik membeli tanah yang saya lihat di BeliTanah dengan detail sebagai berikut:
📍 **Alamat**: ${address}
🌐 **Koordinat**: [Lihat di Google Maps](${coordinateGMapsUrl})
💰 **Harga**: Rp${price.toLocaleString()}
📏 **Ukuran**: ${size.width}m x ${size.height}m
🤝 **Negosiasi**: ${
    isNegotable ? 'Bisa dinegosiasikan' : 'Tidak bisa dinegosiasikan'
  }
💳 **Cicilan**: ${
    isInstallment ? `Tersedia, ${monthInstallment} bulan` : 'Tidak tersedia'
  }${
    negotiablePrice
      ? `Saya ingin melakukan negosiasi mengenai harga tanah ini. Negoisasi yang saya ajukan sebesar **Rp${negotiablePrice}**.`
      : ''
  }
`;
};

export const createBeliTanahKeAgenTemplate = ({
  agentName,
  budget,
  homeSize,
  location,
}) => {
  return `Halo ${agentName}! Saya tertarik untuk membeli tanah dengan detail sebagai berikut:
💰 **Budget**: Rp${budget.toLocaleString()}
📏 **Ukuran**: ${homeSize}
📍 **Lokasi**: ${location}

Mohon informasinya, terima kasih!`;
};
