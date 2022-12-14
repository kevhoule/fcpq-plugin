/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies (global)
 */
 import { getIcon } from '../helper.js';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType('okam/okam-slider-nav', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: __('Okam Slider Nav', 'okam-slider-nav'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: __(
    'Add a slider component.','okam'
  ),

    /**
   * Attributes used by the block.
   */
  attributes: {
    arrowLeftAriaLabel: {
      type: 'string',
      default: __('Previous Slide', 'okam'),
    },
    arrowRightAriaLabel: {
      type: 'string',
      default: __('Next Slide', 'okam'),
    },
    bulletsAriaLabel: {
      type: 'string',
      default: __('Go to slide ', 'okam'),
    },
    glideOptions: {
      type: 'string',
      default: '{}',
    },
    hasArrows: {
      type: 'boolean',
      default: true,
    },
    hasBullets: {
      type: 'boolean',
      default: true,
    },
  },

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'widgets',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress??? Dashicons, or a custom svg element.
   */
  icon: getIcon(),

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false,
    anchor: true,
  },

  /**
   * @see ./edit.js
   */
  edit: Edit,

  /**
   * @see ./save.js
   */
  save,
});
