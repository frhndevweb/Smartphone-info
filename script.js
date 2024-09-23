function showDetails(productName) {
    alert("Anda telah memilih: " + productName);
}

function showDetails(product) {
    const specsDiv = document.getElementById('specs');
    let specs = '';

    switch (product) {
        case 'Samsung Galaxy S24 Ultra':
            specs = `<h2>Spesifikasi Samsung Galaxy S24 Ultra</h2>
                      <ul>
                          <li>Prosesor: Snapdragon 8 Gen 3</li>
                          <li>Layar: Dynamic AMOLED 6,8 inci, 3200 x 1440 piksel</li>
                          <li>Kamera: Quad 200 MP (utama), zoom 10x</li>
                          <li>Baterai: 5000 mAh, pengisian cepat</li>
                          <li>Lainnya: <a href="https://www.samsung.com/id/smartphones/galaxy-s24-ultra">Klik disini</a></li>
                      </ul>`;
            break;
        case 'iPhone 15 Pro Max':
            specs = `<h2>Spesifikasi iPhone 15 Pro Max</h2>
                      <ul>
                          <li>Prosesor: A17 Pro</li>
                          <li>Layar: Super Retina XDR 6,7 inci</li>
                          <li>Kamera: Triple 48 MP</li>
                          <li>Baterai: Tahan seharian, pengisian cepat</li>
                          <li>Lainnya: <a href="https://www.apple.com/id/iphone-15-pro">Klik disini</a></li>
                      </ul>`;
            break;
        case 'Realmi C65':
            specs = `<h2>Spesifikasi Realmi C65</h2>
                      <ul>
                          <li>Prosesor: MediaTek Helio G85</li>
                          <li>Layar: IPS LCD 6,5 inci</li>
                          <li>Kamera: Ganda 50 MP</li>
                          <li>Baterai: 5000 mAh</li>
                          <li>Lainnya: <a href="https://www.realme.com/id/realme-c65">Klik Disini</a></li>
                      </ul>`;
            break;
        case 'Vivo iQOO Z9 5G':
            specs = `<h2>Spesifikasi Vivo iQOO Z9 5G</h2>
                      <ul>
                          <li>Prosesor: Snapdragon 888</li>
                          <li>Layar: AMOLED 6,62 inci</li>
                          <li>Kamera: Triple 64 MP</li>
                          <li>Baterai: 4500 mAh, pengisian 120W</li>
                          <li>Lainnya: <a href="https://www.iqoo.com/id/products/param/z9-5g">Klik disini</a></li>
                      </ul>`;
            break;
        case 'Infinix Note 40':
            specs = `<h2>Spesifikasi Infinix Note 40</h2>
                      <ul>
                          <li>Prosesor: MediaTek Helio G99</li>
                          <li>Layar: IPS LCD 6,78 inci</li>
                          <li>Kamera: Ganda 50 MP</li>
                          <li>Baterai: 5000 mAh</li>
                          <li>Lainnya: <a href="https://id.infinixmobility.com/note-40">Klik disini</a></li>
                      </ul>`;
            break;
        case 'OPPO Reno 11 5G':
            specs = `<h2>Spesifikasi OPPO Reno 11 5G</h2>
              <ul>
                  <li>Prosesor: Qualcomm Snapdragon 778G</li>
                  <li>Layar: AMOLED 6,7 inci</li>
                  <li>Kamera: Triple 64 MP + 8 MP + 2 MP</li>
                  <li>Baterai: 4700 mAh</li>
                  <li>RAM: 8 GB</li>
                  <li>Storage: 256 GB</li>
                  <li>Lainnya: <a href="https://www.oppo.com/id/smartphones/series-reno/reno11">Klik disini</a></li> 
              </ul>`;
    break;

    }

    specsDiv.innerHTML = specs;
    specsDiv.style.display = 'block';
}