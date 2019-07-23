(window.webpackJsonp = window.webpackJsonp || []).push([
	[0],
	{
		269: function(e, t, a) {
			e.exports = a(489);
		},
		288: function(e, t, a) {},
		307: function(e, t, a) {},
		308: function(e, t, a) {},
		486: function(e, t, a) {},
		488: function(e, t, a) {},
		489: function(e, t, a) {
			'use strict';
			a.r(t);
			var n = a(1),
				r = a.n(n),
				o = a(20),
				i = a.n(o),
				c = a(29),
				l = a(89),
				s = a(535),
				u = a(31),
				m = a.n(u),
				f = a(113),
				g = a(22),
				p = a(21),
				d = a(24),
				h = a(23),
				b = a(25),
				E = a(92),
				v = a(490),
				k = a(536),
				O = a(526),
				T = a(539),
				S = a(525),
				j = a(523),
				y = a(524),
				N = a(522),
				C = (function(e) {
					function t() {
						return (
							Object(g.a)(this, t),
							Object(d.a)(this, Object(h.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(b.a)(t, e),
						Object(p.a)(t, [
							{
								key: 'render',
								value: function() {
									var e = this.props,
										t = e.dialogTitle,
										a = void 0 === t ? '' : t,
										n = e.dialogContentText,
										o = e.isOpenDialog,
										i = e.clickDialogClose,
										c = e.clickDialogSuccess,
										l = e.btnSuccessText,
										s = void 0 === l ? 'Close' : l,
										u = e.btnRejectText,
										m = void 0 === u ? null : u;
									return r.a.createElement(
										T.a,
										{
											open: o,
											onClose: i,
											'aria-labelledby': 'form-dialog-title',
										},
										r.a.createElement(N.a, { id: 'form-dialog-title' }, a),
										r.a.createElement(
											j.a,
											null,
											r.a.createElement(y.a, null, n),
											this.props.children
										),
										r.a.createElement(
											S.a,
											null,
											null !== m
												? r.a.createElement(
														O.a,
														{ onClick: i, color: 'primary' },
														m
												  )
												: null,
											r.a.createElement(
												O.a,
												{ onClick: c, color: 'primary' },
												s
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				D = a(122),
				_ = a.n(D),
				w =
					(a(288),
					(function(e) {
						function t() {
							return (
								Object(g.a)(this, t),
								Object(d.a)(this, Object(h.a)(t).apply(this, arguments))
							);
						}
						return (
							Object(b.a)(t, e),
							Object(p.a)(t, [
								{
									key: 'render',
									value: function() {
										var e = this;
										return r.a.createElement(
											_.a,
											{
												variant: 'contained',
												className: 'btn',
												onClick: function() {
													return e.props.toggleStatusTimer(
														e.props.start,
														e.props.stop,
														e.props.reset
													);
												},
											},
											this.props.isStartTimer ? 'Stop' : 'Start'
										);
									},
								},
							]),
							t
						);
					})(r.a.Component)),
				x = (a(307), a(62)),
				R = 10,
				F = 15,
				I = { MIN: 10, MAX: 90 },
				H = 6e4,
				M = a(42),
				A = a.n(M),
				B = function(e) {
					return !(arguments.length > 1 && void 0 !== arguments[1]) ||
						arguments[1]
						? Number(localStorage.getItem(e))
						: JSON.parse(localStorage.getItem(e));
				},
				K = function(e, t) {
					return !(arguments.length > 2 && void 0 !== arguments[2]) ||
						arguments[2]
						? localStorage.setItem(e, t)
						: localStorage.setItem(e, JSON.stringify(t));
				},
				V = function() {
					return new Date().getTime();
				},
				L = function() {
					for (
						var e = new Date(),
							t = W(R, F),
							a = Number(
								new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime()
							),
							n = [],
							r = 0;
						r < t;
						r++
					) {
						var o = U(a);
						n.push({
							taskName: 'Task '.concat(r),
							timeStart: a,
							timeEnd: o,
							timeSpend: o - a,
						}),
							(a = U(o));
					}
					return n;
				};
			function U(e) {
				return e + W(I.MIN, I.MAX) * H;
			}
			function W(e, t) {
				return Math.round(Math.random() * (t - e) + e);
			}
			var J = function(e) {
					return e.map(function(e) {
						return {
							startHour: Number(A()(e.timeStart).format('H')),
							startMin: Number(A()(e.timeStart).format('m')),
							startSec: Number(A()(e.timeStart).format('s')),
							endHour: Number(A()(e.timeEnd).format('H')),
							endMin: Number(A()(e.timeEnd).format('m')),
							endSec: Number(A()(e.timeEnd).format('s')),
						};
					});
				},
				Y = function(e, t) {
					var a = Object(x.a)(e),
						n = !0,
						r = !1,
						o = void 0;
					try {
						for (
							var i, c = t[Symbol.iterator]();
							!(n = (i = c.next()).done);
							n = !0
						) {
							var l = i.value,
								s = l.endHour - l.startHour;
							if (s > 0) {
								for (var u = l.startHour; u < l.endHour; u++)
									l.startHour === u
										? (a[u].uv += 60 - l.startMin)
										: (a[u].uv += 60);
								a[l.endHour].uv += l.endMin;
							} else 0 === s && (a[l.endHour].uv += l.endMin - l.startMin);
						}
					} catch (m) {
						(r = !0), (o = m);
					} finally {
						try {
							n || null == c.return || c.return();
						} finally {
							if (r) throw o;
						}
					}
					return a;
				},
				X = function() {
					for (var e = [], t = 0; t < 24; t++) e.push({ name: t, uv: 0 });
					return e;
				},
				z = 'BUILD_CHART',
				G = function(e) {
					return { type: 'SET_TASK', payload: e };
				},
				P = function() {
					return { type: z };
				},
				$ = function(e) {
					return { type: 'BUILD_CHART_SUCCESS', chartColumns: e };
				},
				q = function() {
					return { type: 'BUILD_CHART_RESET' };
				},
				Q = (function(e) {
					function t() {
						var e;
						return (
							Object(g.a)(this, t),
							((e = Object(d.a)(
								this,
								Object(h.a)(t).call(this)
							)).toggleStatusTimer = function(t, a, n) {
								e.state.isStartTimer
									? '' === e.state.taskName
										? e._toggleDialogTaskNoName(!0)
										: (a(), e._addTaskLog(n))
									: (t(),
									  K('isStartTimer', 1),
									  K('timeStart', V()),
									  e.setState({ isStartTimer: !0 }));
							}),
							(e.handleChangeTaskName = function(t) {
								e.setState({ taskName: t.target.value });
							}),
							(e._addTaskLog = function(t) {
								var a = e.state.taskName,
									n = B('timeStart'),
									r = V() - n,
									o = n + r;
								r < 1e3 && n && (r = 1e3),
									e.props.setTask({
										taskName: a,
										timeStart: n,
										timeEnd: o,
										timeSpend: r,
									}),
									e.setState({
										taskName: '',
										initialTime: 0,
										isStartTimer: !1,
										isOpenDialogNoName: !1,
									}),
									K('timeSpend', 0),
									K('isStartTimer', 0),
									t();
							}),
							(e._toggleDialogTaskNoName = function(t) {
								return e.setState({ isOpenDialogNoName: t });
							}),
							(e._getFormatValue = function(e) {
								var t =
									arguments.length > 1 && void 0 !== arguments[1]
										? arguments[1]
										: ':';
								return ''.concat(e < 10 ? '0'.concat(e) : e).concat(t);
							}),
							(e.state = {
								taskName: '',
								initialTime: 0,
								isStartTimer: !1,
								isOpenDialogNoName: !1,
							}),
							e
						);
					}
					return (
						Object(b.a)(t, e),
						Object(p.a)(t, [
							{
								key: 'componentWillMount',
								value: (function() {
									var e = Object(f.a)(
										m.a.mark(function e() {
											var t, a, n;
											return m.a.wrap(
												function(e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (
																	(t = B('isStartTimer')),
																	(a = B('timeSpend')),
																	(n = t ? V() - B('timeStart') + a : a),
																	(e.next = 5),
																	this.setState({
																		initialTime: n,
																		isStartTimer: t,
																	})
																);
															case 5:
															case 'end':
																return e.stop();
														}
												},
												e,
												this
											);
										})
									);
									return function() {
										return e.apply(this, arguments);
									};
								})(),
							},
							{
								key: 'render',
								value: function() {
									var e = this,
										t = this.state,
										a = t.taskName,
										n = t.initialTime,
										o = t.isStartTimer,
										i = t.isOpenDialogNoName;
									return r.a.createElement(
										'div',
										{ className: 'timer__wrapper' },
										r.a.createElement(C, {
											isOpenDialog: i,
											clickDialogOpen: function() {
												return e._toggleDialogTaskNoName(!0);
											},
											clickDialogClose: function() {
												return e._toggleDialogTaskNoName(!1);
											},
											clickDialogSuccess: function() {
												return e._toggleDialogTaskNoName(!1);
											},
											dialogTitle: 'Empty task name',
											dialogContentText:
												'You are trying close your task without name, please enter the title and try gain!',
										}),
										r.a.createElement(
											E.a,
											{
												initialTime: n,
												startImmediately: o,
												formatValue: function(t) {
													return e._getFormatValue(t);
												},
											},
											function(t) {
												var n = t.start,
													i = t.stop,
													c = t.reset;
												return r.a.createElement(
													r.a.Fragment,
													null,
													r.a.createElement(k.a, {
														value: a,
														onChange: e.handleChangeTaskName,
														placeholder: 'Name of your task',
														className: 'timer__input',
													}),
													r.a.createElement(
														v.a,
														{ className: 'timer' },
														r.a.createElement(E.a.Hours, {
															formatValue: function(t) {
																return e._getFormatValue(t);
															},
														}),
														r.a.createElement(E.a.Minutes, null),
														r.a.createElement(E.a.Seconds, {
															formatValue: function(t) {
																return e._getFormatValue(t, '');
															},
														})
													),
													r.a.createElement(w, {
														start: n,
														stop: i,
														reset: c,
														isStartTimer: o,
														toggleStatusTimer: e.toggleStatusTimer,
													})
												);
											}
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				Z = { setTask: G },
				ee = Object(c.b)(function(e) {
					return { tasks: e.tasks };
				}, Z)(Q),
				te = a(533),
				ae = a(537),
				ne = a(534),
				re = a(58),
				oe = (a(308), a(531)),
				ie = a(529),
				ce = a(530),
				le = a(528),
				se = a(532),
				ue = a(527),
				me = (function(e) {
					function t() {
						return (
							Object(g.a)(this, t),
							Object(d.a)(this, Object(h.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(b.a)(t, e),
						Object(p.a)(t, [
							{
								key: 'render',
								value: function() {
									return r.a.createElement(
										ue.a,
										null,
										r.a.createElement(
											le.a,
											{ align: 'center', colSpan: '7' },
											'Tasks Not Found'
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				fe = (function(e) {
					function t() {
						var e;
						return (
							Object(g.a)(this, t),
							((e = Object(d.a)(
								this,
								Object(h.a)(t).call(this)
							))._toggleDialogInfo = function(t) {
								return e.setState({ isOpenDialogInfo: t });
							}),
							(e.state = { isOpenDialogInfo: !1 }),
							e
						);
					}
					return (
						Object(b.a)(t, e),
						Object(p.a)(t, [
							{
								key: 'render',
								value: function() {
									var e = this,
										t = this.props,
										a = t.task,
										n = t.styleButton,
										o = t.getFormatTime,
										i = this.state.isOpenDialogInfo;
									return r.a.createElement(
										r.a.Fragment,
										null,
										r.a.createElement(
											O.a,
											{
												variant: 'contained',
												style: n,
												onClick: function() {
													return e._toggleDialogInfo(!0);
												},
											},
											'Info'
										),
										r.a.createElement(
											C,
											{
												isOpenDialog: i,
												clickDialogClose: function() {
													return e._toggleDialogInfo(!1);
												},
												clickDialogSuccess: function() {
													return e._toggleDialogInfo(!1);
												},
												dialogTitle: ''.concat(a.taskName),
											},
											r.a.createElement(
												ie.a,
												null,
												r.a.createElement(
													ce.a,
													null,
													r.a.createElement(
														ue.a,
														null,
														r.a.createElement(
															le.a,
															{ align: 'left' },
															' Time start: '
														),
														r.a.createElement(
															le.a,
															{ align: 'left' },
															o(a.timeStart)
														)
													),
													r.a.createElement(
														ue.a,
														null,
														r.a.createElement(
															le.a,
															{ align: 'left' },
															' Time end: '
														),
														r.a.createElement(
															le.a,
															{ align: 'left' },
															o(a.timeEnd)
														)
													),
													r.a.createElement(
														ue.a,
														null,
														r.a.createElement(
															le.a,
															{ align: 'left' },
															' Time spend: '
														),
														r.a.createElement(
															le.a,
															{ align: 'left' },
															o(a.timeSpend, !0)
														)
													)
												)
											)
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				ge = (function(e) {
					function t() {
						var e;
						return (
							Object(g.a)(this, t),
							((e = Object(d.a)(
								this,
								Object(h.a)(t).call(this)
							))._toggleDialogRemove = function(t) {
								return e.setState({ isOpenDialogRemove: t });
							}),
							(e.state = { isOpenDialogRemove: !1 }),
							e
						);
					}
					return (
						Object(b.a)(t, e),
						Object(p.a)(t, [
							{
								key: 'render',
								value: function() {
									var e = this,
										t = this.state.isOpenDialogRemove,
										a = this.props,
										n = a.styleButton,
										o = a.taskIndex,
										i = a.removeTask;
									return r.a.createElement(
										r.a.Fragment,
										null,
										r.a.createElement(
											O.a,
											{
												variant: 'contained',
												style: n,
												onClick: function() {
													return e._toggleDialogRemove(!0);
												},
											},
											'Delete'
										),
										r.a.createElement(C, {
											isOpenDialog: t,
											clickDialogClose: function() {
												return e._toggleDialogRemove(!1);
											},
											clickDialogSuccess: function() {
												e._toggleDialogRemove(!1), i(o);
											},
											btnRejectText: 'No',
											btnSuccessText: 'Yes',
											dialogTitle: 'You are sure?',
										})
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				pe = {
					removeTask: function(e) {
						return { type: 'REMOVE_TASK', index: e };
					},
				},
				de = Object(c.b)(null, pe)(ge),
				he = { background: 'white', borderRadius: 0 },
				be = 'HH:mm:ss',
				Ee = (function(e) {
					function t() {
						var e, a;
						Object(g.a)(this, t);
						for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
							r[o] = arguments[o];
						return (
							((a = Object(d.a)(
								this,
								(e = Object(h.a)(t)).call.apply(e, [this].concat(r))
							)).getFormatTime = function(e, t) {
								return t ? A.a.utc(+e).format(be) : A()(+e).format(be);
							}),
							(a._getTimeEnd = function(e) {
								return a.getFormatTime(e.timeStart) ===
									a.getFormatTime(e.timeEnd)
									? a.getFormatTime(e.timeEnd + 1e3)
									: a.getFormatTime(e.timeEnd);
							}),
							a
						);
					}
					return (
						Object(b.a)(t, e),
						Object(p.a)(t, [
							{
								key: 'render',
								value: function() {
									var e = this,
										t = this.props.tasks;
									return r.a.createElement(
										r.a.Fragment,
										null,
										t.map(function(t, a) {
											return r.a.createElement(
												ue.a,
												{ key: 'task-body-'.concat(a) },
												r.a.createElement(
													le.a,
													{ component: 'th', scope: 'row' },
													++a
												),
												r.a.createElement(le.a, { align: 'left' }, t.taskName),
												r.a.createElement(
													le.a,
													{ align: 'center' },
													e.getFormatTime(t.timeStart)
												),
												r.a.createElement(
													le.a,
													{ align: 'center' },
													e._getTimeEnd(t)
												),
												r.a.createElement(
													le.a,
													{ align: 'center' },
													e.getFormatTime(t.timeSpend, !0)
												),
												r.a.createElement(
													le.a,
													{ align: 'center' },
													r.a.createElement(fe, {
														task: t,
														styleButton: he,
														getFormatTime: e.getFormatTime,
													})
												),
												r.a.createElement(
													le.a,
													{ align: 'center' },
													r.a.createElement(de, {
														taskIndex: --a,
														styleButton: he,
													})
												)
											);
										})
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				ve = Object(c.b)(function(e) {
					return { tasks: e.tasks };
				})(Ee),
				ke = Object(oe.a)(function() {
					return {
						root: { width: '100%', overflowX: 'auto', borderRadius: 0 },
						table: { minWidth: 650 },
					};
				}),
				Oe = [
					'\u2116',
					'Tasks',
					'Time start',
					'Time end',
					'Time Spend',
					'Info',
					'Delete',
				],
				Te = Object(c.b)(function(e) {
					return { tasks: e.tasks };
				})(function(e) {
					var t = e.tasks,
						a = ke();
					return r.a.createElement(
						r.a.Fragment,
						null,
						r.a.createElement(
							v.a,
							{ className: a.root },
							r.a.createElement(
								ie.a,
								{ className: a.table },
								r.a.createElement(
									se.a,
									null,
									r.a.createElement(
										ue.a,
										null,
										Oe.map(function(e, t) {
											return r.a.createElement(
												le.a,
												{ key: 'task-header-'.concat(t), align: 'center' },
												e
											);
										})
									)
								),
								r.a.createElement(
									ce.a,
									null,
									t.length
										? r.a.createElement(ve, null)
										: r.a.createElement(me, null)
								)
							)
						)
					);
				}),
				Se = a(65),
				je =
					(a(486),
					(function(e) {
						function t() {
							var e, a;
							Object(g.a)(this, t);
							for (
								var n = arguments.length, r = new Array(n), o = 0;
								o < n;
								o++
							)
								r[o] = arguments[o];
							return (
								((a = Object(d.a)(
									this,
									(e = Object(h.a)(t)).call.apply(e, [this].concat(r))
								))._generate = Object(f.a)(
									m.a.mark(function e() {
										var t;
										return m.a.wrap(function(e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														return (e.next = 2), a.props.resetTasks();
													case 2:
														return (e.next = 4), L();
													case 4:
														return (
															(t = e.sent),
															K('tasks', t, !1),
															(e.next = 8),
															a.props.refreshTasks(t)
														);
													case 8:
														a.props.buildChart();
													case 9:
													case 'end':
														return e.stop();
												}
										}, e);
									})
								)),
								a
							);
						}
						return (
							Object(b.a)(t, e),
							Object(p.a)(t, [
								{
									key: 'render',
									value: function() {
										var e = this;
										return r.a.createElement(
											_.a,
											{
												variant: 'contained',
												className: 'btn btn__generate',
												onClick: function() {
													return e._generate();
												},
											},
											'Generate'
										);
									},
								},
							]),
							t
						);
					})(r.a.Component)),
				ye = {
					setTask: G,
					refreshTasks: function(e) {
						return { type: 'REFRESH_TASKS', tasks: e };
					},
					resetTasks: function(e) {
						return { type: 'RESET_TASKS', index: e };
					},
					buildChart: P,
				},
				Ne = Object(c.b)(null, ye)(je),
				Ce = (function(e) {
					function t() {
						return (
							Object(g.a)(this, t),
							Object(d.a)(this, Object(h.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(b.a)(t, e),
						Object(p.a)(t, [
							{
								key: 'componentDidMount',
								value: function() {
									this.props.buildChart();
								},
							},
							{
								key: 'render',
								value: function() {
									return r.a.createElement(
										r.a.Fragment,
										null,
										r.a.createElement(
											Se.d,
											{ width: '100%', height: 300 },
											r.a.createElement(
												Se.b,
												{ data: this.props.chartColumns },
												r.a.createElement(Se.c, { stroke: '#ccc' }),
												r.a.createElement(Se.e, { dataKey: 'name' }),
												r.a.createElement(Se.f, { domain: [0, 60] }),
												r.a.createElement(Se.a, {
													type: 'monotone',
													dataKey: 'uv',
													barSize: 30,
													fill: '#8884d8',
													label: De,
												})
											)
										),
										r.a.createElement(Ne, null)
									);
								},
							},
						]),
						t
					);
				})(n.PureComponent),
				De = function(e) {
					e.payload;
					var t = e.x,
						a = e.y,
						n = e.width,
						o = (e.height, e.value);
					if (o > 0) {
						var i = 16,
							c = '#fff';
						return (
							o <= 5 && ((i = -6), (c = '#000')),
							r.a.createElement(
								'text',
								{ x: t + n / 2, y: a, fill: c, textAnchor: 'middle', dy: i },
								o
							)
						);
					}
					return null;
				},
				_e = { buildChart: P },
				we = Object(c.b)(function(e) {
					return { chartColumns: e.chartColumns };
				}, _e)(Ce),
				xe = (function(e) {
					function t() {
						var e;
						return (
							Object(g.a)(this, t),
							((e = Object(d.a)(
								this,
								Object(h.a)(t).call(this)
							)).handleChange = function(t, a) {
								e.setState({ value: a });
							}),
							(e.state = { value: 0 }),
							e
						);
					}
					return (
						Object(b.a)(t, e),
						Object(p.a)(t, [
							{
								key: 'componentDidMount',
								value: function() {
									this.setState({
										value:
											'/tasks/chart' === this.props.location.pathname ? 1 : 0,
									});
								},
							},
							{
								key: 'render',
								value: function() {
									var e = this.state.value;
									return r.a.createElement(
										'div',
										{ className: 'tabs__wrapper' },
										r.a.createElement(
											te.a,
											{ position: 'static' },
											r.a.createElement(
												ae.a,
												{
													variant: 'fullWidth',
													value: e,
													onChange: this.handleChange,
												},
												r.a.createElement(ne.a, {
													label: 'Task Log',
													component: l.b,
													to: '/tasks/log',
												}),
												r.a.createElement(ne.a, {
													label: 'Task Chart',
													component: l.b,
													to: '/tasks/chart',
												})
											)
										),
										r.a.createElement(
											re.c,
											null,
											r.a.createElement(re.a, {
												path: '/tasks/log',
												component: Te,
											}),
											r.a.createElement(re.a, {
												path: '/tasks/chart',
												component: we,
											}),
											r.a.createElement(re.a, { component: Te })
										)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				Re = Object(re.f)(xe),
				Fe = a(41),
				Ie = B('tasks', !1) || [],
				He = function() {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: Ie,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case 'SET_TASK':
							var a = [].concat(Object(x.a)(e), [t.payload]);
							return K('tasks', a, !1), a;
						case 'REMOVE_TASK':
							var n = Object(x.a)(e);
							return n.splice(t.index, 1), K('tasks', n, !1), n;
						case 'REFRESH_TASKS':
							return t.tasks;
						case 'RESET_TASKS':
							return [];
						default:
							return e;
					}
				},
				Me = X(),
				Ae = function() {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: Me,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case 'BUILD_CHART_SUCCESS':
							return t.chartColumns;
						case 'BUILD_CHART_RESET':
							return X();
						default:
							return e;
					}
				},
				Be = Object(Fe.combineReducers)({ tasks: He, chartColumns: Ae }),
				Ke = a(237),
				Ve = a(238),
				Le = a(51),
				Ue = m.a.mark(Je),
				We = m.a.mark(Ye);
			function Je() {
				var e, t, a, n, r;
				return m.a.wrap(
					function(o) {
						for (;;)
							switch ((o.prev = o.next)) {
								case 0:
									return (o.prev = 0), (o.next = 3), Object(Le.c)(q());
								case 3:
									return (o.next = 5), Object(Le.d)();
								case 5:
									return (
										(e = o.sent),
										(t = e.tasks),
										(a = e.chartColumns),
										(o.next = 10),
										Object(Le.b)(function() {
											return J(t);
										})
									);
								case 10:
									return (
										(n = o.sent),
										(o.next = 13),
										Object(Le.b)(function() {
											return Y(a, n);
										})
									);
								case 13:
									return (r = o.sent), (o.next = 16), Object(Le.c)($(r));
								case 16:
									o.next = 21;
									break;
								case 18:
									(o.prev = 18),
										(o.t0 = o.catch(0)),
										console.log('error: ', o.t0);
								case 21:
								case 'end':
									return o.stop();
							}
					},
					Ue,
					null,
					[[0, 18]]
				);
			}
			function Ye() {
				return m.a.wrap(function(e) {
					for (;;)
						switch ((e.prev = e.next)) {
							case 0:
								return (e.next = 2), Object(Le.e)(z, Je);
							case 2:
							case 'end':
								return e.stop();
						}
				}, We);
			}
			var Xe = m.a.mark(ze);
			function ze() {
				return m.a.wrap(function(e) {
					for (;;)
						switch ((e.prev = e.next)) {
							case 0:
								return (e.next = 2), Object(Le.a)([Ye()]);
							case 2:
							case 'end':
								return e.stop();
						}
				}, Xe);
			}
			var Ge = Object(Ve.a)(),
				Pe = Object(Fe.createStore)(
					Be,
					Object(Ke.composeWithDevTools)(Object(Fe.applyMiddleware)(Ge))
				);
			Ge.run(ze);
			var $e = Pe,
				qe = function() {
					return r.a.createElement(
						c.a,
						{ store: $e },
						r.a.createElement(
							s.a,
							null,
							r.a.createElement(
								l.a,
								null,
								r.a.createElement(ee, null),
								r.a.createElement(Re, null)
							)
						)
					);
				};
			Boolean(
				'localhost' === window.location.hostname ||
					'[::1]' === window.location.hostname ||
					window.location.hostname.match(
						/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
					)
			);
			a(488);
			i.a.render(r.a.createElement(qe, null), document.getElementById('root')),
				'serviceWorker' in navigator &&
					navigator.serviceWorker.ready.then(function(e) {
						e.unregister();
					});
		},
	},
	[[269, 1, 2]],
]);
//# sourceMappingURL=main.df257234.chunk.js.map
