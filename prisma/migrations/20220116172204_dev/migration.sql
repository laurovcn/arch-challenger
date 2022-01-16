-- CreateTable
CREATE TABLE "Students" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notes" (
    "studentsId" INTEGER NOT NULL,
    "n1" TEXT NOT NULL,
    "n2" TEXT NOT NULL,
    "n3" TEXT NOT NULL,
    "n4" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_name_key" ON "Students"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Notes_studentsId_key" ON "Notes"("studentsId");

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_studentsId_fkey" FOREIGN KEY ("studentsId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
