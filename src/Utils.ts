import { Platform } from "react-native";

export module Utils {

  /**
   * Returns the platform type style
   * @param webStyle web style
   * @param mobileStyle mobile style
   * @returns platform style
   */
  export function getStyle(webStyle: any, mobileStyle: any): any {
    if(Platform.OS === 'web') {
      return webStyle;
    }
    return mobileStyle;
  }
}