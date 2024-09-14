import { SingleImageElement } from "~/schema/cmsElements";
import { Img } from "~/pages/CmsPage/groups/LogoLister/SingleImage/styled";

type Props = {
  data: SingleImageElement;
};

export function SingleImage({ data }: Props) {
  return <Img src={data.media.image_url} alt={data.media.image_alt} />;
}
