// This file is automatically generated, do not edit
goog.provide('ol.renderer.webgl.map.shader.Color');
goog.provide('ol.renderer.webgl.map.shader.Color.Locations');
goog.provide('ol.renderer.webgl.map.shader.ColorFragment');
goog.provide('ol.renderer.webgl.map.shader.ColorVertex');

goog.require('ol.webgl.shader');



/**
 * @constructor
 * @extends {ol.webgl.shader.Fragment}
 * @struct
 */
ol.renderer.webgl.map.shader.ColorFragment = function() {
  goog.base(this, ol.renderer.webgl.map.shader.ColorFragment.SOURCE);
};
goog.inherits(ol.renderer.webgl.map.shader.ColorFragment, ol.webgl.shader.Fragment);
goog.addSingletonGetter(ol.renderer.webgl.map.shader.ColorFragment);


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.map.shader.ColorFragment.DEBUG_SOURCE = 'precision mediump float;\nvarying vec2 v_texCoord;\n\n\n// @see https://svn.webkit.org/repository/webkit/trunk/Source/WebCore/platform/graphics/filters/skia/SkiaImageFilterBuilder.cpp\nuniform mat4 u_colorMatrix;\nuniform float u_opacity;\nuniform sampler2D u_texture;\n\nvoid main(void) {\n  vec4 texColor = texture2D(u_texture, v_texCoord);\n  gl_FragColor.rgb = (u_colorMatrix * vec4(texColor.rgb, 1.)).rgb;\n  gl_FragColor.a = texColor.a * u_opacity;\n}\n';


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.map.shader.ColorFragment.OPTIMIZED_SOURCE = 'precision mediump float;varying vec2 a;uniform mat4 f;uniform float g;uniform sampler2D h;void main(void){vec4 texColor=texture2D(h,a);gl_FragColor.rgb=(f*vec4(texColor.rgb,1.)).rgb;gl_FragColor.a=texColor.a*g;}';


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.map.shader.ColorFragment.SOURCE = goog.DEBUG ?
    ol.renderer.webgl.map.shader.ColorFragment.DEBUG_SOURCE :
    ol.renderer.webgl.map.shader.ColorFragment.OPTIMIZED_SOURCE;



/**
 * @constructor
 * @extends {ol.webgl.shader.Vertex}
 * @struct
 */
ol.renderer.webgl.map.shader.ColorVertex = function() {
  goog.base(this, ol.renderer.webgl.map.shader.ColorVertex.SOURCE);
};
goog.inherits(ol.renderer.webgl.map.shader.ColorVertex, ol.webgl.shader.Vertex);
goog.addSingletonGetter(ol.renderer.webgl.map.shader.ColorVertex);


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.map.shader.ColorVertex.DEBUG_SOURCE = 'varying vec2 v_texCoord;\n\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\n\nuniform mat4 u_texCoordMatrix;\nuniform mat4 u_projectionMatrix;\n\nvoid main(void) {\n  gl_Position = u_projectionMatrix * vec4(a_position, 0., 1.);\n  v_texCoord = (u_texCoordMatrix * vec4(a_texCoord, 0., 1.)).st;\n}\n\n\n';


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.map.shader.ColorVertex.OPTIMIZED_SOURCE = 'varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}';


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.map.shader.ColorVertex.SOURCE = goog.DEBUG ?
    ol.renderer.webgl.map.shader.ColorVertex.DEBUG_SOURCE :
    ol.renderer.webgl.map.shader.ColorVertex.OPTIMIZED_SOURCE;



/**
 * @constructor
 * @param {WebGLRenderingContext} gl GL.
 * @param {WebGLProgram} program Program.
 * @struct
 */
ol.renderer.webgl.map.shader.Color.Locations = function(gl, program) {

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_colorMatrix = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_colorMatrix' : 'f');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_opacity = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_opacity' : 'g');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_projectionMatrix = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_projectionMatrix' : 'e');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_texCoordMatrix = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_texCoordMatrix' : 'd');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_texture = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_texture' : 'h');

  /**
   * @type {number}
   */
  this.a_position = gl.getAttribLocation(
      program, goog.DEBUG ? 'a_position' : 'b');

  /**
   * @type {number}
   */
  this.a_texCoord = gl.getAttribLocation(
      program, goog.DEBUG ? 'a_texCoord' : 'c');
};
