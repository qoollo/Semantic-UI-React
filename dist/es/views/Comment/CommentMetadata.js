import _extends from 'babel-runtime/helpers/extends';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { customPropTypes, getElementType, getUnhandledProps, META } from '../../lib';

/**
 * A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined.
 */
function CommentMetadata(props) {
  var className = props.className,
      children = props.children;

  var classes = cx('metadata', className);
  var rest = getUnhandledProps(CommentMetadata, props);
  var ElementType = getElementType(CommentMetadata, props);

  return React.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    children
  );
}

CommentMetadata.handledProps = ['as', 'children', 'className'];
CommentMetadata._meta = {
  name: 'CommentMetadata',
  parent: 'Comment',
  type: META.TYPES.VIEW
};

CommentMetadata.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string
} : {};

export default CommentMetadata;