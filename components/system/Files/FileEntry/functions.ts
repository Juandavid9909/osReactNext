export const getIconByFileExtension = (extension: string): string => {
  switch(extension) {
    case ".img":
      return "";

    case ".iso":
      return "/icons/image.png";

    default:
      return "/icons/unknown.png";
  }
}

export const getProcessByFileExtension = (extension: string): string => {
  switch(extension) {
    case ".img":
      return "";

    case ".iso":
      return "V86";

    default:
      return "";
  }
};
