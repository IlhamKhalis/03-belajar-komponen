import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default function MyProfileV2() {
  return (
    <div>
      <Card>
        <h1>Foto</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card>
        <h1>Tentang</h1>
        <p>Aklilu Lemma adalah seorang ilmuwan terkemuka dari etiopia yang telah menemukan pengobatan alami untuk skistosomiasis.</p>
      </Card>
    </div>
  );
}
