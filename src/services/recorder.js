import { VoiceRecorder } from "capacitor-voice-recorder";
import { r } from "./debugger";

export const requestAudioRecordingPermission = function () {
  return VoiceRecorder.requestAudioRecordingPermission().then((result) =>
    r(["requestAudioRecordingPermission", result], result.value)
  );
};

export const hasAudioRecordingPermission = function () {
  return VoiceRecorder.hasAudioRecordingPermission().then((result) =>
    r(["hasAudioRecordingPermission", result], result.value)
  );
};

export const startRecording = function () {
  return VoiceRecorder.startRecording()
    .then((result) => r(["startRecording", result], result.value))
    .catch((error) => r(["startRecording", error], false));
  // "MISSING_PERMISSION", "ALREADY_RECORDING", "MICROPHONE_BEING_USED", "DEVICE_CANNOT_VOICE_RECORD", "FAILED_TO_RECORD"
};

export const stopRecording = function () {
  return (
    VoiceRecorder.stopRecording()
      .then((result) => r(["stopRecording", result], result.value))
      // {"value": { recordDataBase64: string, msDuration: number, mimeType: string }},
      .catch((error) => r(["stopRecording", error], false))
  );
  // "RECORDING_HAS_NOT_STARTED" or "FAILED_TO_FETCH_RECORDING"
};

export const pauseRecording = function () {
  return VoiceRecorder.pauseRecording()
    .then((result) => r(["stopRecording", result], result.value))
    .catch((error) => r(["stopRecording", error], false));
  // `NOT_SUPPORTED_OS_VERSION`
};

export const resumeRecording = function () {
  return VoiceRecorder.resumeRecording()
    .then((result) => r(["resumeRecording", result], result.value))
    .catch((error) => r(["resumeRecording", error], false));
  // `NOT_SUPPORTED_OS_VERSION`
};

export const getCurrentStatus = function () {
  return VoiceRecorder.getCurrentStatus()
    .then((result) => r(["getCurrentStatus", result], result.value))
    .catch((error) => r(["getCurrentStatus", error], false));
  // "NONE" / "RECORDING" / "PAUSED"
};
