/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number
  height: string
  width: string
  public_id: string
  format: string
  blurDataUrl?: string
  customMetadata?: CustomMetadata
  
}

export interface CustomMetadata {
  alt: string;
  caption: string;
  medidas: string;
  // ... otras propiedades personalizadas que necesites ...
}

export interface SharedModalProps {
  index: number
  images?: ImageProps[]
  currentPhoto?: ImageProps
  changePhotoId: (newVal: number) => void
  closeModal: () => void
  navigation: boolean
  direction?: number
}
