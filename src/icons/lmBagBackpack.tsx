"use client";
import React from "react";
import { color as globalColors } from "../shared/styles.ts";
import { AssetProps } from "./types/asset.types.ts";
import useIconSize from "./hooks/useIconSize.ts";

export const LmBagBackpack: React.FC<AssetProps> = ({
  size = 1,
  color = globalColors.foreground,
  ...props
}) => {
  const [width, height] = useIconSize(24, 24, size);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7.21112V7.2C14 5.82671 13.5612 4.55356 12.6926 3.63887C11.8505 2.75214 10.4127 2 8 2C5.58731 2 4.14948 2.75214 3.30739 3.63887C2.43876 4.55356 2 5.82671 2 7.2V16H14V15.9992V15.9815V15.9638V15.946V15.9281V15.9102V15.8922V15.8742V15.8561V15.8379V15.8197V15.8015V15.7832V15.7648V15.7464V15.728V15.7095V15.6909V15.6723V15.6537V15.635V15.6162V15.5974V15.5786V15.5597V15.5407V15.5217V15.5027V15.4836V15.4644V15.4453V15.426V15.4067V15.3874V15.3681V15.3486V15.3292V15.3097V15.2901V15.2705V15.2509V15.2312V15.2115V15.1917V15.1719V15.1521V15.1322V15.1123V15.0923V15.0723V15.0522V15.0322V15.012V14.9918V14.9716V14.9514V14.9311V14.9108V14.8904V14.87V14.8496V14.8291V14.8086V14.788V14.7675V14.7468V14.7262V14.7055V14.6848V14.664V14.6432V14.6224V14.6015V14.5806V14.5597V14.5388V14.5178V14.4967V14.4757V14.4546V14.4335V14.4123V14.3912V14.37V14.3487V14.3275V14.3062V14.2848V14.2635V14.2421V14.2207V14.1993V14.1778V14.1563V14.1348V14.1133V14.0917V14.0701V14.0485V14.0268V14.0052V13.9835V13.9618V13.94V13.9183V13.8965V13.8747V13.8528V13.831V13.8091V13.7872V13.7653V13.7433V13.7214V13.6994V13.6774V13.6554V13.6334V13.6113V13.5892V13.5671V13.545V13.5229V13.5007V13.4786V13.4564V13.4342V13.412V13.3898V13.3675V13.3452V13.323V13.3007V13.2784V13.2561V13.2337V13.2114V13.189V13.1667V13.1443V13.1219V13.0995V13.0771V13.0546V13.0322V13.0097V12.9873V12.9648V12.9423V12.9198V12.8974V12.8748V12.8523V12.8298V12.8073V12.7847V12.7622V12.7397V12.7171V12.6945V12.672V12.6494V12.6268V12.6042V12.5816V12.559V12.5364V12.5139V12.4912V12.4686V12.446V12.4234V12.4008V12.3782V12.3556V12.333V12.3103V12.2877V12.2651V12.2425V12.2199V12.1973V12.1746V12.152V12.1294V12.1068V12.0842V12.0616V12.039V12.0164V11.9938V11.9712V11.9486V11.9261V11.9035V11.8809V11.8583V11.8358V11.8132V11.7907V11.7681V11.7456V11.7231V11.7006V11.6781V11.6556V11.6331V11.6106V11.5881V11.5656V11.5432V11.5208V11.4983V11.4759V11.4535V11.4311V11.4087V11.3863V11.364V11.3416V11.3193V11.297V11.2747V11.2524V11.2301V11.2078V11.1856V11.1633V11.1411V11.1189V11.0967V11.0745V11.0524V11.0303V11.0081V10.986V10.964V10.9419V10.9198V10.8978V10.8758V10.8538V10.8319V10.8099V10.788V10.7661V10.7442V10.7223V10.7005V10.6787V10.6569V10.6351V10.6134V10.5916V10.5699V10.5483V10.5266V10.505V10.4834V10.4618V10.4402V10.4187V10.3972V10.3757V10.3543V10.3329V10.3115V10.2901V10.2688V10.2475V10.2262V10.205V10.1837V10.1626V10.1414V10.1203V10.0992V10.0781V10.0571V10.0361V10.0151V9.99416V9.97325V9.95238V9.93154V9.91074V9.88996V9.86923V9.84852V9.82785V9.80722V9.78662V9.76606V9.74554V9.72505V9.70459V9.68418V9.6638V9.64346V9.62316V9.60289V9.58267V9.56248V9.54234V9.52223V9.50216V9.48213V9.46215V9.4422V9.4223V9.40243V9.38261V9.36283V9.3431V9.3234V9.30375V9.28414V9.26458V9.24506V9.22558V9.20615V9.18677V9.16743V9.14813V9.12888V9.10968V9.09052V9.07141V9.05235V9.03333V9.01436V8.99545V8.97657V8.95775V8.93898V8.92025V8.90158V8.88296V8.86438V8.84586V8.82739V8.80896V8.7906V8.77228V8.75401V8.7358V8.71764V8.69953V8.68148V8.66348V8.64553V8.62764V8.6098V8.59202V8.57429V8.55662V8.53901V8.52145V8.50395V8.4865V8.46911V8.45178V8.43451V8.4173V8.40014V8.38304V8.36601V8.34903V8.33211V8.31525V8.29845V8.28171V8.26504V8.24842V8.23187V8.21537V8.19895V8.18258V8.16627V8.15003V8.13385V8.11774V8.10169V8.08571V8.06979V8.05393V8.03814V8.02242V8.00676V7.99117V7.97564V7.96018V7.94479V7.92947V7.91421V7.89903V7.88391V7.86886V7.85388V7.83897V7.82412V7.80935V7.79465V7.78002V7.76546V7.75098V7.73656V7.72222V7.70795V7.69375V7.67962V7.66557V7.65159V7.63768V7.62385V7.6101V7.59641V7.58281V7.56928V7.55582V7.54244V7.52914V7.51591V7.50276V7.48969V7.4767V7.46378V7.45095V7.43819V7.42551V7.41291V7.40038V7.38794V7.37558V7.3633V7.3511V7.33898V7.32695V7.31499V7.30312V7.29133V7.27962V7.26799V7.25645V7.24499V7.23362V7.22233V7.21112ZM8 0C2.28571 0 0 3.63103 0 7.2V17.0026C0 17.5549 0.447715 18 1 18H15C15.5523 18 16 17.5549 16 17.0026V7.2C16 3.63103 13.7143 0 8 0ZM11 10.5598C10.9704 10.5399 10.9315 10.516 10.8808 10.4883C10.4816 10.2703 9.60426 10 8 10C6.39574 10 5.51844 10.2703 5.11917 10.4883C5.06854 10.516 5.02957 10.5399 5 10.5598V13H11V12.9923V12.9838V12.9754V12.967V12.9585V12.9501V12.9416V12.9332V12.9247V12.9163V12.9078V12.8993V12.8909V12.8824V12.8739V12.8654V12.8569V12.8485V12.84V12.8315V12.823V12.8145V12.806V12.7975V12.789V12.7805V12.772V12.7635V12.7549V12.7464V12.7379V12.7294V12.7209V12.7124V12.7038V12.6953V12.6868V12.6783V12.6697V12.6612V12.6527V12.6442V12.6356V12.6271V12.6186V12.61V12.6015V12.593V12.5845V12.5759V12.5674V12.5589V12.5503V12.5418V12.5333V12.5248V12.5162V12.5077V12.4992V12.4907V12.4822V12.4736V12.4651V12.4566V12.4481V12.4396V12.4311V12.4226V12.414V12.4055V12.397V12.3885V12.38V12.3715V12.3631V12.3546V12.3461V12.3376V12.3291V12.3206V12.3122V12.3037V12.2952V12.2867V12.2783V12.2698V12.2614V12.2529V12.2445V12.236V12.2276V12.2192V12.2107V12.2023V12.1939V12.1855V12.177V12.1686V12.1602V12.1518V12.1434V12.1351V12.1267V12.1183V12.1099V12.1016V12.0932V12.0848V12.0765V12.0681V12.0598V12.0515V12.0432V12.0348V12.0265V12.0182V12.0099V12.0016V11.9933V11.9851V11.9768V11.9685V11.9603V11.952V11.9438V11.9355V11.9273V11.9191V11.9109V11.9027V11.8945V11.8863V11.8781V11.8699V11.8618V11.8536V11.8455V11.8373V11.8292V11.8211V11.813V11.8049V11.7968V11.7887V11.7806V11.7725V11.7645V11.7564V11.7484V11.7404V11.7323V11.7243V11.7163V11.7083V11.7004V11.6924V11.6844V11.6765V11.6686V11.6606V11.6527V11.6448V11.6369V11.629V11.6212V11.6133V11.6055V11.5976V11.5898V11.582V11.5742V11.5664V11.5586V11.5508V11.5431V11.5354V11.5276V11.5199V11.5122V11.5045V11.4968V11.4892V11.4815V11.4739V11.4662V11.4586V11.451V11.4434V11.4359V11.4283V11.4208V11.4132V11.4057V11.3982V11.3907V11.3832V11.3758V11.3683V11.3609V11.3535V11.3461V11.3387V11.3313V11.3239V11.3166V11.3093V11.3019V11.2946V11.2874V11.2801V11.2728V11.2656V11.2584V11.2512V11.244V11.2368V11.2296V11.2225V11.2154V11.2083V11.2012V11.1941V11.187V11.18V11.173V11.166V11.159V11.152V11.145V11.1381V11.1312V11.1243V11.1174V11.1105V11.1037V11.0968V11.09V11.0832V11.0765V11.0697V11.063V11.0562V11.0495V11.0428V11.0362V11.0295V11.0229V11.0163V11.0097V11.0031V10.9966V10.99V10.9835V10.977V10.9706V10.9641V10.9577V10.9513V10.9449V10.9385V10.9321V10.9258V10.9195V10.9132V10.9069V10.9007V10.8945V10.8882V10.8821V10.8759V10.8698V10.8636V10.8575V10.8514V10.8454V10.8394V10.8333V10.8273V10.8214V10.8154V10.8095V10.8036V10.7977V10.7919V10.786V10.7802V10.7744V10.7687V10.7629V10.7572V10.7515V10.7458V10.7402V10.7345V10.7289V10.7234V10.7178V10.7123V10.7068V10.7013V10.6958V10.6904V10.685V10.6796V10.6742V10.6689V10.6636V10.6583V10.653V10.6478V10.6426V10.6374V10.6322V10.6271V10.622V10.6169V10.6118V10.6068V10.6018V10.5968V10.5919V10.5869V10.582V10.5771V10.5723V10.5675V10.5627V10.5598ZM4.91744 10.626C4.9171 10.626 4.91949 10.6229 4.92566 10.6169C4.92087 10.6231 4.91779 10.6261 4.91744 10.626ZM11.0743 10.6169C11.0805 10.6229 11.0829 10.626 11.0826 10.626C11.0822 10.6261 11.0791 10.6231 11.0743 10.6169ZM8 8C4.42857 8 3 9.17672 3 10.3333V14.0012C3 14.5534 3.44772 15 4 15H12C12.5523 15 13 14.5534 13 14.0012V10.3333C13 9.17672 11.5714 8 8 8ZM6.5 4.5C5.94772 4.5 5.5 4.94772 5.5 5.5C5.5 6.05228 5.94772 6.5 6.5 6.5H9.5C10.0523 6.5 10.5 6.05228 10.5 5.5C10.5 4.94772 10.0523 4.5 9.5 4.5H6.5Z" fill={color}/>

    </svg>
  );
};