import { Platform } from "react-native";

export module Utils {

  /**
   * Returns the platform type style
   * @param webStyle web style
   * @param mobileStyle mobile style
   * @returns platform style
   */
  export function getStyle(webStyle: any, mobileStyle: any): any {
    if(isWeb()) {
      return webStyle;
    }
    return mobileStyle;
  }

  /**
   * Tells if the current platform is web or not
   * @returns true if the current platform is web, false otherwise
   */
  export function isWeb(): boolean {
    return Platform.OS === 'web';
  }
}