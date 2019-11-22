function initSVGAnimations(){
  illuminating = new TimelineMax({delay:0.5})
    .add([
      TweenMax.from("#usge-presents", 0.5, {ease:Quad.easeInOut, opacity:0})
    ], 0.0)
    .add([
      TweenMax.from(illuminating_svg_10b, 1, svg_draw_fade),
      TweenMax.from(illuminating_svg_10w, 1, svg_draw),
      TweenMax.from(illuminating_svg_11b, 1, svg_draw_fade),
      TweenMax.from(illuminating_svg_11w, 1, svg_draw)
    ], 0.0+0.5)
    .add([
      TweenMax.from(illuminating_svg_20b, 1, svg_draw_fade),
      TweenMax.from(illuminating_svg_20w, 1, svg_draw),
      TweenMax.fromTo(illuminating_svg_21b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(illuminating_svg_21w, 1, svg_draw_reverse_from, svg_draw_reverse_to)
    ], 0.15+0.5)
    .add([
      TweenMax.from(illuminating_svg_30b, 1, svg_draw_fade),
      TweenMax.from(illuminating_svg_30w, 1, svg_draw),
      TweenMax.fromTo(illuminating_svg_31b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(illuminating_svg_31w, 1, svg_draw_reverse_from, svg_draw_reverse_to)
    ], 0.3+0.5)
    .add([
      TweenMax.from(illuminating_svg_40b, 1, svg_draw_fade),
      TweenMax.from(illuminating_svg_40w, 1, svg_draw),
      TweenMax.from(illuminating_svg_41b, 1, svg_draw_fade),
      TweenMax.from(illuminating_svg_41w, 1, svg_draw)
    ], 0.45+0.5)
    .add([
      TweenMax.from(illuminating_svg_50b, 1.5, svg_draw_fade),
      TweenMax.from(illuminating_svg_50w, 1.5, svg_draw),
      TweenMax.fromTo(illuminating_svg_51b, 1.5, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(illuminating_svg_51w, 1.5, svg_draw_reverse_from, svg_draw_reverse_to)
    ], 0.6+0.5)
    .add([
      TweenMax.from(illuminating_svg_60b, 1, svg_draw_fade),
      TweenMax.from(illuminating_svg_60w, 1, svg_draw),
      TweenMax.from(illuminating_svg_61b, 1, svg_draw_fade),
      TweenMax.from(illuminating_svg_61w, 1, svg_draw)
    ], 0.75+0.5)
    .add([
      TweenMax.from(illuminating_svg_70b, 1.5, svg_draw_fade),
      TweenMax.from(illuminating_svg_70w, 1.5, svg_draw),
      TweenMax.from(illuminating_svg_71b, 1.5, svg_draw_fade),
      TweenMax.from(illuminating_svg_71w, 1.5, svg_draw)
    ], 0.9+0.5)
    .add([
      TweenMax.from(illuminating_svg_80b, 1, svg_draw_fade),
      TweenMax.from(illuminating_svg_80w, 1, svg_draw),
      TweenMax.fromTo(illuminating_svg_81b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(illuminating_svg_81w, 1, svg_draw_reverse_from, svg_draw_reverse_to),
      TweenMax.from(illuminating_svg_82b, 1, svg_draw_fade),
      TweenMax.from(illuminating_svg_82w, 1, svg_draw)
    ], 1.05+0.5)
    .add([
      TweenMax.from(illuminating_svg_90b, 1, svg_draw_fade),
      TweenMax.from(illuminating_svg_90w, 1, svg_draw),
      TweenMax.fromTo(illuminating_svg_91b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(illuminating_svg_91w, 1, svg_draw_reverse_from, svg_draw_reverse_to),
      TweenMax.from(illuminating_svg_92b, 1, svg_draw_fade),
      TweenMax.from(illuminating_svg_92w, 1, svg_draw)
    ], 1.2+0.5)
    .add([
      TweenMax.from(illuminating_svg_100b, 1, svg_draw_fade),
      TweenMax.from(illuminating_svg_100w, 1, svg_draw),
      TweenMax.from(illuminating_svg_101b, 1, svg_draw_fade),
      TweenMax.from(illuminating_svg_101w, 1, svg_draw)
    ], 1.35+0.5)
    .add([
      TweenMax.from(illuminating_svg_110b, 1.5, svg_draw_fade),
      TweenMax.from(illuminating_svg_110w, 1.5, svg_draw),
      TweenMax.from(illuminating_svg_111b, 1.5, svg_draw_fade),
      TweenMax.from(illuminating_svg_111w, 1.5, svg_draw)
    ], 1.5+0.5)
    .add([
      TweenMax.from(illuminating_svg_120b, 1.5, svg_draw_fade),
      TweenMax.from(illuminating_svg_120w, 1.5, svg_draw),
      TweenMax.fromTo(illuminating_svg_121b, 1.5, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(illuminating_svg_121w, 1.5, svg_draw_reverse_from, svg_draw_reverse_to)
    ], 1.65+0.5)
    .add([
      TweenMax.from("#safety", 2, {ease:Quad.easeOut, opacity:0})
    ], 2.8)
    .add([
      TweenMax.from(arrow_svg_1b, 0.5, svg_draw_fade),
      TweenMax.from(arrow_svg_1w, 0.5, svg_draw),
      TweenMax.fromTo(arrow_svg_2b, 0.5, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(arrow_svg_2w, 0.5, svg_draw_reverse_from, svg_draw_reverse_to)
    ], 4.5)
    .add([
      TweenMax.from("#scroll", 1, {ease:Quad.easeOut, opacity:0})
    ], 4.5)
    .add([
      TweenMax.from("#watch-video", 0.5, {ease:Quad.easeOut, opacity:0.00})
    ], 4);

  usge = new TimelineMax()
    .add([
      TweenMax.from(usge_svg_10b, 1, svg_draw_fade),
      TweenMax.from(usge_svg_10w, 1, svg_draw),
      TweenMax.from(usge_svg_11b, 1, svg_draw_fade),
      TweenMax.from(usge_svg_11w, 1, svg_draw)
    ], 0.0)
    .add([
      TweenMax.from(usge_svg_20b, 1, svg_draw_fade),
      TweenMax.from(usge_svg_20w, 1, svg_draw),
      TweenMax.from(usge_svg_21b, 1, svg_draw_fade),
      TweenMax.from(usge_svg_21w, 1, svg_draw)
    ], 0.15)
    .add([
      TweenMax.from(usge_svg_30b, 1, svg_draw_fade),
      TweenMax.from(usge_svg_30w, 1, svg_draw),
      TweenMax.fromTo(usge_svg_31b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(usge_svg_31w, 1, svg_draw_reverse_from, svg_draw_reverse_to)
    ], 0.3)
    .add([
      TweenMax.from(usge_svg_40b, 1, svg_draw_fade),
      TweenMax.from(usge_svg_40w, 1, svg_draw),
      TweenMax.fromTo(usge_svg_41b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(usge_svg_41w, 1, svg_draw_reverse_from, svg_draw_reverse_to),
      TweenMax.fromTo(usge_svg_42b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(usge_svg_42w, 1, svg_draw_reverse_from, svg_draw_reverse_to),
    ], 0.45)
    .add([
      TweenMax.from(usge_svg_union, 0.5, {opacity:0.08}),
    ], 0.6)
    .add([
      TweenMax.from(usge_svg_solicitor, 0.5, {opacity:0.08}),
    ], 0.75)
    .add([
      TweenMax.from(usge_svg_general, 0.5, {opacity:0.08}),
    ], 0.9)
    .add([
      TweenMax.from(usge_svg_employees, 0.5, {opacity:0.08}),
    ], 1.05);

  curve = new TimelineMax()
    .add([
      TweenMax.from(curves_svg_curvesb, 1, svg_draw_fade),
      TweenMax.from(curves_svg_curvesw, 1, svg_draw)
    ], 0)
    .add([
      TweenMax.from(curves_svg_dot0b, 0.05, {opacity:0}),
      TweenMax.from(curves_svg_dot0w, 0.05, {opacity:0}),
      TweenMax.from(curve_copy0, 0.05, {opacity:0.08})
    ], 0.01)
    .add([
      TweenMax.from(curves_svg_dot1b, 0.05, {opacity:0}),
      TweenMax.from(curves_svg_dot1w, 0.05, {opacity:0}),
      TweenMax.from(curve_copy1, 0.05, {opacity:0.08})
    ], 0.312-0.01)
    .add([
      TweenMax.from(curves_svg_dot2b, 0.05, {opacity:0}),
      TweenMax.from(curves_svg_dot2w, 0.05, {opacity:0}),
      TweenMax.from(curve_copy2, 0.05, {opacity:0.08})
    ], 0.445-0.01)
    .add([
      TweenMax.from(curves_svg_dot3b, 0.05, {opacity:0}),
      TweenMax.from(curves_svg_dot3w, 0.05, {opacity:0}),
      TweenMax.from(curve_copy3, 0.05, {opacity:0.08})
    ], 0.554-0.01)
    .add([
      TweenMax.from(curves_svg_dot4b, 0.05, {opacity:0}),
      TweenMax.from(curves_svg_dot4w, 0.05, {opacity:0}),
      TweenMax.from(curve_copy4, 0.05, {opacity:0.08})
    ], 0.688-0.01)
    .add([
      TweenMax.from(curves_svg_dot5b, 0.05, {opacity:0}),
      TweenMax.from(curves_svg_dot5w, 0.05, {opacity:0}),
      TweenMax.from(curve_copy5, 0.05, {opacity:0.08})
    ], 0.98-0.04);

  sixteen = new TimelineMax()
    .add([
      TweenMax.from(sixteen_svg_10b, 1, svg_draw_fade),
      TweenMax.from(sixteen_svg_10w, 1, svg_draw),
      TweenMax.from(sixteen_svg_11b, 1, svg_draw_fade),
      TweenMax.from(sixteen_svg_11w, 1, svg_draw)
    ], 0.0)
    .add([
      TweenMax.from(sixteen_svg_20b, 1, svg_draw_fade),
      TweenMax.from(sixteen_svg_20w, 1, svg_draw),
      TweenMax.from(sixteen_svg_21b, 1.5, svg_draw_fade),
      TweenMax.from(sixteen_svg_21w, 1.5, svg_draw)
    ], 0.15)
    .add([
      TweenMax.from(sixteen_svg_30b, 0.5, svg_draw_fade),
      TweenMax.from(sixteen_svg_30w, 0.5, svg_draw),
      TweenMax.fromTo(sixteen_svg_31b, 0.5, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(sixteen_svg_31w, 0.5, svg_draw_reverse_from, svg_draw_reverse_to)
    ], 0.3)
    .add([
      TweenMax.from(sixteen_svg_40b, 1, svg_draw_fade),
      TweenMax.from(sixteen_svg_40w, 1, svg_draw),
      TweenMax.fromTo(sixteen_svg_41b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(sixteen_svg_41w, 1, svg_draw_reverse_from, svg_draw_reverse_to)
    ], 0.45)
    .add([
      TweenMax.from(sixteen_svg_50b, 1, svg_draw_fade),
      TweenMax.from(sixteen_svg_50w, 1, svg_draw),
      TweenMax.fromTo(sixteen_svg_51b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(sixteen_svg_51w, 1, svg_draw_reverse_from, svg_draw_reverse_to)
    ], 0.6)
    .add([
      TweenMax.from(sixteen_svg_60b, 1, svg_draw_fade),
      TweenMax.from(sixteen_svg_60w, 1, svg_draw),
      TweenMax.fromTo(sixteen_svg_61b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(sixteen_svg_61w, 1, svg_draw_reverse_from, svg_draw_reverse_to)
    ], 0.75);

  newheadline = new TimelineMax()
    .add([
      TweenMax.from(newheadline_svg_10b, 1, svg_draw_fade),
      TweenMax.from(newheadline_svg_10w, 1, svg_draw),
      TweenMax.fromTo(newheadline_svg_11b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(newheadline_svg_11w, 1, svg_draw_reverse_from, svg_draw_reverse_to)
    ], 0.0)
    .add([
      TweenMax.from(newheadline_svg_20b, 1, svg_draw_fade),
      TweenMax.from(newheadline_svg_20w, 1, svg_draw),
      TweenMax.from(newheadline_svg_21b, 1, svg_draw_fade),
      TweenMax.from(newheadline_svg_21w, 1, svg_draw)
    ], 0.15)
    .add([
      TweenMax.from(newheadline_svg_30b, 1, svg_draw_fade),
      TweenMax.from(newheadline_svg_30w, 1, svg_draw),
      TweenMax.from(newheadline_svg_31b, 1, svg_draw_fade),
      TweenMax.from(newheadline_svg_31w, 1, svg_draw),
      TweenMax.from(newheadline_svg_32b, 1, svg_draw_fade),
      TweenMax.from(newheadline_svg_32w, 1, svg_draw)
    ], 0.3)
    .add([
      TweenMax.from(newheadline_svg_40b, 1, svg_draw_fade),
      TweenMax.from(newheadline_svg_40w, 1, svg_draw),
      TweenMax.from(newheadline_svg_41b, 1, svg_draw_fade),
      TweenMax.from(newheadline_svg_41w, 1, svg_draw)
    ], 0.45)
    .add([
      TweenMax.from(newheadline_svg_50b, 1.5, svg_draw_fade),
      TweenMax.from(newheadline_svg_50w, 1.5, svg_draw),
      TweenMax.fromTo(newheadline_svg_51b, 1.5, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(newheadline_svg_51w, 1.5, svg_draw_reverse_from, svg_draw_reverse_to)
    ], 0.60)
    .add([
      TweenMax.from(newheadline_svg_60b, 1, svg_draw_fade),
      TweenMax.from(newheadline_svg_60w, 1, svg_draw),
      TweenMax.fromTo(newheadline_svg_61b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(newheadline_svg_61w, 1, svg_draw_reverse_from, svg_draw_reverse_to)
    ], 0.75)
    .add([
      TweenMax.from(newheadline_svg_70b, 1, svg_draw_fade),
      TweenMax.from(newheadline_svg_70w, 1, svg_draw),
      TweenMax.fromTo(newheadline_svg_71b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(newheadline_svg_71w, 1, svg_draw_reverse_from, svg_draw_reverse_to),
      TweenMax.from(newheadline_svg_72b, 1, svg_draw_fade),
      TweenMax.from(newheadline_svg_72w, 1, svg_draw)
    ], 0.90)
    .add([
      TweenMax.from(newheadline_svg_80b, 1, svg_draw_fade),
      TweenMax.from(newheadline_svg_80w, 1, svg_draw),
      TweenMax.from(newheadline_svg_81b, 1, svg_draw_fade),
      TweenMax.from(newheadline_svg_81w, 1, svg_draw)
    ], 1.05)
    .add([
      TweenMax.from(newheadline_svg_90b, 1, svg_draw_fade),
      TweenMax.from(newheadline_svg_90w, 1, svg_draw),
      TweenMax.fromTo(newheadline_svg_91b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(newheadline_svg_91w, 1, svg_draw_reverse_from, svg_draw_reverse_to),
      TweenMax.fromTo(newheadline_svg_92b, 1, svg_draw_fade_reverse_from, svg_draw_fade_reverse_to),
      TweenMax.fromTo(newheadline_svg_92w, 1, svg_draw_reverse_from, svg_draw_reverse_to)
    ], 1.2);
}