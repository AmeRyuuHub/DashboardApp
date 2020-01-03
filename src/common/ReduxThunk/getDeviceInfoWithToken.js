const getDeviceInfo = async (rout, MAC, refreshToken) => {
    try {
      const data = await rout(MAC);
      return data;
    } catch (error) {
      if (error.response.status === 498) {
        let { token } = await refreshToken();
        localStorage.setItem("jssid", token);
        return getDeviceInfo(rout, MAC);
      }
      throw error;
    }
  };
  export default getDeviceInfo;