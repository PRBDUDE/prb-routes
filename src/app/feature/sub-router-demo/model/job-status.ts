export class JobStatus {
  batchId: string;
  timestamp: Date;
  description: string;

  constructor(batchId: string, timestamp: Date, description: string) {
    this.batchId = batchId;
    this.timestamp = timestamp;
    this.description = description;
  }
}

