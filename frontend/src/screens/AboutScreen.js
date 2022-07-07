import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const AboutScreen = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <h1 className=" text-light">About</h1>
      <div className="d-flex flex-row mb-2">
        <div className="p-2">
          <p className=" text-light">
            BAGNIVERSE adalah unit usaha yang bergerak dalam bidang fashion.
            kami menggunakan bahan-bahan yang ramah lingkungan untuk produk
            kami. Bagniverse ingin membuktikan bahwa hanya dengan produk daur
            ulang saja, kita dapat bergaya yang tidak kalah dengan bahan buatan
            biasa dan tentunya tetap menjaga alam tercinta.
          </p>
          <div>
            <Button variant="light" className="btn-buy">
              <Link to="/">Buy now</Link>
            </Button>
          </div>
        </div>
        <div className="p-2">
          <img width={500} src="images/banner.png" />
        </div>
      </div>
      <div className="vision p-5">
        <h1 className="text-center">Vision</h1>
        <p className="text-center">
          “Menciptakan produk kreatif yang sustainable menggunakan limbah sampah
          di Indonesia demi meminimalisir kerusakan alam.”
        </p>
      </div>
      <div className="mission p-5 text-center text-light">
        <h1 className="text-center">Mission</h1>
        <div className="d-flex flex-row mb-2 text-center">
          <div className="p-2">
            Mengembangkan produk kreatif yang berguna untuk kegiatan
            sehari-hari.
          </div>
          <div className="p-2">
            Mengolah limbah sampah khususnya limbah kain menjadi produk
            multifungsi untuk masyarakat Indonesia.
          </div>
          <div className="p-2">
            Menciptakan produk sustainable untuk mengurangi limbah sampah setiap
            harinya.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
