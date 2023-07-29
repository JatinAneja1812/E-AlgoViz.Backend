const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 B";

  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const sizeInUnits = (bytes / Math.pow(1024, i)).toFixed(2);

  return `${sizeInUnits} ${sizes[i]}`;
};

export { formatFileSize };
