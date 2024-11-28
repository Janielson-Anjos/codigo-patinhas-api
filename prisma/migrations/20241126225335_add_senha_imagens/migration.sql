-- CreateTable
CREATE TABLE "PETS" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "idade" INTEGER,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'disponível',
    "imagens" TEXT[],

    CONSTRAINT "PETS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ADOTANTES" (
    "id" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "imagem" TEXT,

    CONSTRAINT "ADOTANTES_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ADOCOES" (
    "id" TEXT NOT NULL,
    "pet_id" TEXT NOT NULL,
    "adotante_id" TEXT NOT NULL,
    "data_adocao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ADOCOES_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ADOTANTES_email_key" ON "ADOTANTES"("email");

-- AddForeignKey
ALTER TABLE "ADOCOES" ADD CONSTRAINT "ADOCOES_adotante_id_fkey" FOREIGN KEY ("adotante_id") REFERENCES "ADOTANTES"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ADOCOES" ADD CONSTRAINT "ADOCOES_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "PETS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
