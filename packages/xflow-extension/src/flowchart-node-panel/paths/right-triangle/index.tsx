import { createPath } from '../../utils';
import { NODE_PADDING } from '../../constants';
import { getConfig } from '../utils';

export const RightTriangleNodePath = (props) => {
  const { width, height } = getConfig(props);

  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // 上
    ['L', width - 2 * NODE_PADDING, (height / 2) * NODE_PADDING], // 下
    ['L', NODE_PADDING, height * NODE_PADDING], // 左
    ['Z'],
  ];

  return [createPath(path)];
};