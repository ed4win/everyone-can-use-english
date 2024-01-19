type AudioType = {
  id: string;
  source: string;
  name: string;
  description?: string;
  src?: string;
  coverUrl?: string;
  md5: string;
  metadata?: Ffmpeg.FfprobeData;
  transcribed?: boolean;
  transcribing?: boolean;
  recordingsCount?: number;
  recordingsDuration?: number;
  isUploaded?: boolean;
  uploadedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
};