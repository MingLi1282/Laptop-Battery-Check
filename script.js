const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      // console.log(battery);
      function updateAllBatteryDetails() {
        updateCharingInfo();
        updateChargingTime();
        updateDischarge();
        updateLevelChange();
      }
      updateAllBatteryDetails();
      // Battery charging change
      battery.addEventListener("chargingchange", () => {
        updateCharingInfo();
      });
      function updateCharingInfo() {
        const isCharging = battery.charging ? "Yes" : "No";
        batteryCharging.innerHTML = isCharging;
        // console.log(isCharging);
      }
      // Battery charging time
      battery.addEventListener("chargingtimechange", () => {
        // console.log("Charging time has changed");
        updateChargingTime();
      });
      function updateChargingTime() {
        const chargingTime = battery.chargingTime;
        batteryChargingTime.innerHTML = chargingTime;
        // console.log(chargingTime);
      }
      // Battery Discharging time
      battery.addEventListener("dischargingtimechange", () => {
        // console.log("DIscharging time has changed");
        updateDischarge();
      });
      function updateDischarge() {
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " sec";
        // console.log(battery.dischargeTime);
      }
      // Battery Level Change
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      });
      function updateLevelChange() {
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;
      }
      // Battery Status
      battery.addEventListener("chargingtimechange", () => {
        console.log("Charging time has changed");
      });
    });
  }
};

battery();
