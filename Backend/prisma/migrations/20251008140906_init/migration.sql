-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'SALE', 'MANAGER', 'ADMIN');

-- CreateEnum
CREATE TYPE "KpiStage" AS ENUM ('COMMUNICATIONS', 'CONTACTED', 'QUOTATION', 'NEGOTIATION', 'CLOSED_DEAL');

-- CreateEnum
CREATE TYPE "KpiMetric" AS ENUM ('TIME_TO_FIRST_CONTACT', 'TIME_IN_STAGE', 'TIME_TO_QUOTATION', 'TIME_TO_CLOSE', 'RESPONSE_TIME', 'CUSTOM');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tol" TEXT,
    "role" "Role" NOT NULL DEFAULT 'CUSTOMER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(12,2) NOT NULL,
    "property" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tol" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Communications" (
    "id" SERIAL NOT NULL,
    "phone" TEXT,
    "chat" TEXT,
    "voiceNote" TEXT,
    "customerId" INTEGER NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Communications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contacted" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "topic" TEXT,
    "note" TEXT,
    "stateDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "customerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contacted_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quotation" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "stateDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "terms" TEXT,
    "quotationNumber" TEXT NOT NULL,
    "totalAmount" DECIMAL(12,2) NOT NULL,
    "note" TEXT,
    "endDate" TIMESTAMP(3),
    "customerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Quotation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proposal" (
    "id" SERIAL NOT NULL,
    "quotation" TEXT NOT NULL,
    "terms" TEXT,
    "priceOffered" DECIMAL(12,2) NOT NULL,
    "productId" INTEGER,
    "quotationId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Negotiation" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "stateDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "note" TEXT,
    "endDate" TIMESTAMP(3),
    "customerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Negotiation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClosedDeal" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "stateDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalValue" DECIMAL(12,2),
    "discount" DECIMAL(12,2),
    "dealStatus" TEXT,
    "closingDate" TIMESTAMP(3),
    "note" TEXT,
    "endDate" TIMESTAMP(3),
    "customerId" INTEGER NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClosedDeal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KPITracking" (
    "id" SERIAL NOT NULL,
    "stage" "KpiStage" NOT NULL,
    "metric" "KpiMetric" NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3),
    "valueSeconds" INTEGER,
    "targetSeconds" INTEGER,
    "breached" BOOLEAN NOT NULL DEFAULT false,
    "note" TEXT,
    "customerId" INTEGER NOT NULL,
    "quotationId" INTEGER,
    "negotiationId" INTEGER,
    "closedDealId" INTEGER,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KPITracking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE INDEX "Customer_userId_idx" ON "Customer"("userId");

-- CreateIndex
CREATE INDEX "Communications_customerId_idx" ON "Communications"("customerId");

-- CreateIndex
CREATE INDEX "Communications_userId_idx" ON "Communications"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Contacted_customerId_key" ON "Contacted"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "Quotation_quotationNumber_key" ON "Quotation"("quotationNumber");

-- CreateIndex
CREATE INDEX "Quotation_customerId_idx" ON "Quotation"("customerId");

-- CreateIndex
CREATE INDEX "Quotation_stateDate_idx" ON "Quotation"("stateDate");

-- CreateIndex
CREATE INDEX "Proposal_productId_idx" ON "Proposal"("productId");

-- CreateIndex
CREATE INDEX "Proposal_quotationId_idx" ON "Proposal"("quotationId");

-- CreateIndex
CREATE INDEX "Negotiation_customerId_idx" ON "Negotiation"("customerId");

-- CreateIndex
CREATE INDEX "Negotiation_stateDate_idx" ON "Negotiation"("stateDate");

-- CreateIndex
CREATE INDEX "ClosedDeal_customerId_idx" ON "ClosedDeal"("customerId");

-- CreateIndex
CREATE INDEX "ClosedDeal_userId_idx" ON "ClosedDeal"("userId");

-- CreateIndex
CREATE INDEX "ClosedDeal_closingDate_idx" ON "ClosedDeal"("closingDate");

-- CreateIndex
CREATE INDEX "KPITracking_customerId_idx" ON "KPITracking"("customerId");

-- CreateIndex
CREATE INDEX "KPITracking_quotationId_idx" ON "KPITracking"("quotationId");

-- CreateIndex
CREATE INDEX "KPITracking_negotiationId_idx" ON "KPITracking"("negotiationId");

-- CreateIndex
CREATE INDEX "KPITracking_closedDealId_idx" ON "KPITracking"("closedDealId");

-- CreateIndex
CREATE INDEX "KPITracking_userId_idx" ON "KPITracking"("userId");

-- CreateIndex
CREATE INDEX "KPITracking_stage_metric_idx" ON "KPITracking"("stage", "metric");

-- CreateIndex
CREATE INDEX "KPITracking_startedAt_idx" ON "KPITracking"("startedAt");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Communications" ADD CONSTRAINT "Communications_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Communications" ADD CONSTRAINT "Communications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contacted" ADD CONSTRAINT "Contacted_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quotation" ADD CONSTRAINT "Quotation_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_quotationId_fkey" FOREIGN KEY ("quotationId") REFERENCES "Quotation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Negotiation" ADD CONSTRAINT "Negotiation_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClosedDeal" ADD CONSTRAINT "ClosedDeal_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClosedDeal" ADD CONSTRAINT "ClosedDeal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KPITracking" ADD CONSTRAINT "KPITracking_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KPITracking" ADD CONSTRAINT "KPITracking_quotationId_fkey" FOREIGN KEY ("quotationId") REFERENCES "Quotation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KPITracking" ADD CONSTRAINT "KPITracking_negotiationId_fkey" FOREIGN KEY ("negotiationId") REFERENCES "Negotiation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KPITracking" ADD CONSTRAINT "KPITracking_closedDealId_fkey" FOREIGN KEY ("closedDealId") REFERENCES "ClosedDeal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KPITracking" ADD CONSTRAINT "KPITracking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
