import { listHID } from './listHID.jsx';

const scaleConfigs = [
    // {
    //   productId: 0x00000d8f,
    //   vendorId: 0x00000200,
    //   manufacturer: "Pitney Bowes",
    //   product: "397-D Scale",
    // },
    {
      productId: 0x00008009,
      vendorId: 0x00000922,
      manufacturer: "DYMO",
      product: "S250 250 lb Por",
    },
  ];

  export default function claimScale() {
    const devices = listHID;
    const device = devices.find((dev: any) => {
        return scaleConfigs.find((scaleConfig: any) => {
            return (
                dev.product === scaleConfig.product &&
                dev.manufacturer === scaleConfig.manufacturer
            );
        });
    });
    return device;
}