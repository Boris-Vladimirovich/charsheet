export default function saveByteArray(reportName, byte) {
  const blob = new Blob([ byte ], { type: 'application/pdf' });
  const link = document.createElement('a');
  
  link.href = URL.createObjectURL(blob);
  link.download = reportName;
  link.click();
}
