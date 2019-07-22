(window.webpackJsonp = window.webpackJsonp || []).push([
	[0],
	{
		263: function(e, t, a) {
			e.exports = a(480);
		},
		281: function(e, t, a) {},
		478: function(e, t, a) {},
		479: function(e, t, a) {},
		480: function(e, t, a) {
			'use strict';
			a.r(t);
			var n = a(1),
				r = a.n(n),
				o = a(19),
				i = a.n(o),
				c = a(30),
				l = a(526),
				s = a(23),
				u = a(21),
				m = a(25),
				g = a(24),
				f = a(26),
				p = a(86),
				d = a(481),
				v = a(527),
				E = a(517),
				k = a(530),
				b = a(516),
				S = a(514),
				h = a(515),
				O = a(513),
				T = (function(e) {
					function t() {
						return (
							Object(s.a)(this, t),
							Object(m.a)(this, Object(g.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(f.a)(t, e),
						Object(u.a)(t, [
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
										k.a,
										{
											open: o,
											onClose: i,
											'aria-labelledby': 'form-dialog-title',
										},
										r.a.createElement(O.a, { id: 'form-dialog-title' }, a),
										r.a.createElement(
											S.a,
											null,
											r.a.createElement(h.a, null, n),
											this.props.children
										),
										r.a.createElement(
											b.a,
											null,
											null !== m
												? r.a.createElement(
														E.a,
														{ onClick: i, color: 'primary' },
														m
												  )
												: null,
											r.a.createElement(
												E.a,
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
				_ = a(115),
				j = a.n(_),
				y =
					(a(281),
					(function(e) {
						function t() {
							return (
								Object(s.a)(this, t),
								Object(m.a)(this, Object(g.a)(t).apply(this, arguments))
							);
						}
						return (
							Object(f.a)(t, e),
							Object(u.a)(t, [
								{
									key: 'render',
									value: function() {
										var e = this;
										return r.a.createElement(
											j.a,
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
				N = a(233),
				C = a(522),
				w = a(525),
				D = a(528),
				x = a(524),
				R = (a(234), a(520)),
				I = a(521),
				A = a(519),
				L = a(523),
				F = a(518),
				G = (function(e) {
					function t() {
						return (
							Object(s.a)(this, t),
							Object(m.a)(this, Object(g.a)(t).apply(this, arguments))
						);
					}
					return (
						Object(f.a)(t, e),
						Object(u.a)(t, [
							{
								key: 'render',
								value: function() {
									return r.a.createElement(
										F.a,
										null,
										r.a.createElement(
											A.a,
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
				M = a(38),
				H = a.n(M),
				V = (function(e) {
					function t() {
						var e;
						return (
							Object(s.a)(this, t),
							((e = Object(m.a)(
								this,
								Object(g.a)(t).call(this)
							))._toggleDialogInfo = function(t) {
								return e.setState({ isOpenDialogInfo: t });
							}),
							(e.state = { isOpenDialogInfo: !1 }),
							e
						);
					}
					return (
						Object(f.a)(t, e),
						Object(u.a)(t, [
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
											E.a,
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
											T,
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
												R.a,
												null,
												r.a.createElement(
													I.a,
													null,
													r.a.createElement(
														F.a,
														null,
														r.a.createElement(
															A.a,
															{ align: 'left' },
															' Time start: '
														),
														r.a.createElement(
															A.a,
															{ align: 'left' },
															o(a.timeStart)
														)
													),
													r.a.createElement(
														F.a,
														null,
														r.a.createElement(
															A.a,
															{ align: 'left' },
															' Time end: '
														),
														r.a.createElement(
															A.a,
															{ align: 'left' },
															o(a.timeEnd)
														)
													),
													r.a.createElement(
														F.a,
														null,
														r.a.createElement(
															A.a,
															{ align: 'left' },
															' Time spend: '
														),
														r.a.createElement(
															A.a,
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
				K = 'GET_LOCAL_STORAGE',
				Y = 'SET_LOCAL_STORAGE',
				B = function(e) {
					return { type: 'SET_TASK', payload: e };
				},
				J = function(e) {
					return { type: 'REMOVE_TASK', index: e };
				},
				W = function(e) {
					return { type: 'GET_LOCAL_STORAGE_SUCCESS', value: e };
				},
				P = function(e) {
					return { type: 'GET_LOCAL_STORAGE_ERROR', error: e };
				},
				U = function(e) {
					return { type: 'SET_LOCAL_STORAGE_SUCCESS', value: e };
				},
				z = function(e) {
					return { type: 'SET_LOCAL_STORAGE_ERROR', error: e };
				},
				X = (function(e) {
					function t() {
						var e;
						return (
							Object(s.a)(this, t),
							((e = Object(m.a)(
								this,
								Object(g.a)(t).call(this)
							))._toggleDialogRemove = function(t) {
								return e.setState({ isOpenDialogRemove: t });
							}),
							(e.state = { isOpenDialogRemove: !1 }),
							e
						);
					}
					return (
						Object(f.a)(t, e),
						Object(u.a)(t, [
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
											E.a,
											{
												variant: 'contained',
												style: n,
												onClick: function() {
													return e._toggleDialogRemove(!0);
												},
											},
											'Delete'
										),
										r.a.createElement(T, {
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
				$ = { removeTask: J },
				q = Object(c.b)(null, $)(X),
				Q = { background: 'white', borderRadius: 0 },
				Z = 'HH:mm:ss',
				ee = (function(e) {
					function t() {
						var e, a;
						Object(s.a)(this, t);
						for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
							r[o] = arguments[o];
						return (
							((a = Object(m.a)(
								this,
								(e = Object(g.a)(t)).call.apply(e, [this].concat(r))
							)).getFormatTime = function(e, t) {
								return t ? H.a.utc(+e).format(Z) : H()(+e).format(Z);
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
						Object(f.a)(t, e),
						Object(u.a)(t, [
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
												F.a,
												{ key: 'task-body-'.concat(a) },
												r.a.createElement(
													A.a,
													{ component: 'th', scope: 'row' },
													++a
												),
												r.a.createElement(A.a, { align: 'left' }, t.taskName),
												r.a.createElement(
													A.a,
													{ align: 'center' },
													e.getFormatTime(t.timeStart)
												),
												r.a.createElement(
													A.a,
													{ align: 'center' },
													e._getTimeEnd(t)
												),
												r.a.createElement(
													A.a,
													{ align: 'center' },
													e.getFormatTime(t.timeSpend, !0)
												),
												r.a.createElement(
													A.a,
													{ align: 'center' },
													r.a.createElement(V, {
														task: t,
														styleButton: Q,
														getFormatTime: e.getFormatTime,
													})
												),
												r.a.createElement(
													A.a,
													{ align: 'center' },
													r.a.createElement(q, {
														taskIndex: --a,
														styleButton: Q,
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
				te = Object(c.b)(function(e) {
					return { tasks: e.tasks };
				})(ee),
				ae = Object(C.a)(function() {
					return {
						root: { width: '100%', overflowX: 'auto', borderRadius: 0 },
						table: { minWidth: 650 },
					};
				}),
				ne = [
					'\u2116',
					'Tasks',
					'Time start',
					'Time end',
					'Time Spend',
					'Info',
					'Delete',
				],
				re = Object(c.b)(function(e) {
					return { tasks: e.tasks };
				})(function(e) {
					var t = e.tasks,
						a = ae();
					return r.a.createElement(
						r.a.Fragment,
						null,
						r.a.createElement(
							d.a,
							{ className: a.root },
							r.a.createElement(
								R.a,
								{ className: a.table },
								r.a.createElement(
									L.a,
									null,
									r.a.createElement(
										F.a,
										null,
										ne.map(function(e, t) {
											return r.a.createElement(
												A.a,
												{ key: 'task-header-'.concat(t), align: 'center' },
												e
											);
										})
									)
								),
								r.a.createElement(
									I.a,
									null,
									t.length
										? r.a.createElement(te, null)
										: r.a.createElement(G, null)
								)
							)
						)
					);
				}),
				oe = a(22),
				ie = a.n(oe),
				ce = a(81),
				le = a(58),
				se = (function(e) {
					function t() {
						var e, a;
						Object(s.a)(this, t);
						for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
							r[o] = arguments[o];
						return (
							((a = Object(m.a)(
								this,
								(e = Object(g.a)(t)).call.apply(e, [this].concat(r))
							))._generate = Object(ce.a)(
								ie.a.mark(function e() {
									var t, n, r, o, i;
									return ie.a.wrap(function(e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (e.next = 2), a.props.resetTasks();
												case 2:
													(t = new Date()),
														(n = a._getRandomNumber(10, 15)),
														(r = Number(
															new Date(
																t.getFullYear(),
																t.getMonth(),
																t.getDate()
															).getTime()
														)),
														(o = 0);
												case 6:
													if (!(o < n)) {
														e.next = 14;
														break;
													}
													return (
														(i = a._getNextTime(r)),
														(e.next = 10),
														a.props.setTask({
															taskName: 'Task '.concat(o),
															timeStart: r,
															timeEnd: i,
															timeSpend: i - r,
														})
													);
												case 10:
													r = a._getNextTime(i);
												case 11:
													o++, (e.next = 6);
													break;
												case 14:
												case 'end':
													return e.stop();
											}
									}, e);
								})
							)),
							(a._getNextTime = function(e) {
								return e + 6e4 * a._getRandomNumber(10, 90);
							}),
							(a._getRandomNumber = function(e, t) {
								return Math.round(Math.random() * (t - e) + e);
							}),
							a
						);
					}
					return (
						Object(f.a)(t, e),
						Object(u.a)(t, [
							{
								key: 'render',
								value: function() {
									var e = this;
									return r.a.createElement(
										j.a,
										{
											variant: 'contained',
											className: 'btn',
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
				})(r.a.Component),
				ue = {
					setTask: B,
					removeTask: J,
					resetTasks: function(e) {
						return { type: 'RESET_TASKS', index: e };
					},
				},
				me = Object(c.b)(function(e) {
					return { tasks: e.tasks };
				}, ue)(se),
				ge = (function(e) {
					function t() {
						var e;
						return (
							Object(s.a)(this, t),
							((e = Object(m.a)(
								this,
								Object(g.a)(t).call(this)
							))._setNewFormatTasks = function() {
								var t = e.props.tasks.map(function(e) {
									return {
										startHour: Number(H()(e.timeStart).format('H')),
										startMin: Number(H()(e.timeStart).format('m')),
										startSec: Number(H()(e.timeStart).format('ss')),
										endHour: Number(H()(e.timeEnd).format('H')),
										endMin: Number(H()(e.timeEnd).format('m')),
										endSec: Number(H()(e.timeEnd).format('ss')),
									};
								});
								e.setState({ tasks: t });
							}),
							(e._setValuesChart = Object(ce.a)(
								ie.a.mark(function t() {
									var a, n, r, o, i, c, l, s;
									return ie.a.wrap(
										function(t) {
											for (;;)
												switch ((t.prev = t.next)) {
													case 0:
														for (a = [], n = 0; n < 24; n++)
															a.push({ name: n, uv: 0 });
														for (
															r = !0,
																o = !1,
																i = void 0,
																t.prev = 5,
																c = e.state.tasks[Symbol.iterator]();
															!(r = (l = c.next()).done);
															r = !0
														)
															(s = l.value), e._setValueColumn(s, [].concat(a));
														t.next = 13;
														break;
													case 9:
														(t.prev = 9),
															(t.t0 = t.catch(5)),
															(o = !0),
															(i = t.t0);
													case 13:
														(t.prev = 13),
															(t.prev = 14),
															r || null == c.return || c.return();
													case 16:
														if (((t.prev = 16), !o)) {
															t.next = 19;
															break;
														}
														throw i;
													case 19:
														return t.finish(16);
													case 20:
														return t.finish(13);
													case 21:
													case 'end':
														return t.stop();
												}
										},
										t,
										null,
										[[5, 9, 13, 21], [14, , 16, 20]]
									);
								})
							)),
							(e._setValueColumn = function(t, a) {
								var n = t.endHour - t.startHour;
								if (n > 0) {
									for (var r = t.startHour; r < t.endHour; r++)
										t.startHour === r
											? (a[r].uv += 60 - t.startMin)
											: (a[r].uv += 60);
									a[t.endHour].uv += t.endMin;
								} else 0 === n && (a[t.endHour].uv += t.endMin - t.startMin);
								e.setState({ columns: a });
							}),
							(e.state = {
								columns: [],
								tasks: [],
								currentDay: H()().format('DD-MM-YYYY'),
							}),
							e
						);
					}
					return (
						Object(f.a)(t, e),
						Object(u.a)(t, [
							{
								key: 'componentDidMount',
								value: (function() {
									var e = Object(ce.a)(
										ie.a.mark(function e() {
											return ie.a.wrap(
												function(e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (e.next = 2), this._setNewFormatTasks();
															case 2:
																return (e.next = 4), this._setValuesChart();
															case 4:
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
									var e = this.state.columns;
									return r.a.createElement(
										r.a.Fragment,
										null,
										r.a.createElement(
											le.d,
											{ width: '100%', height: 300 },
											r.a.createElement(
												le.b,
												{ data: e.slice() },
												r.a.createElement(le.c, { stroke: '#ccc' }),
												r.a.createElement(le.e, { dataKey: 'name' }),
												r.a.createElement(le.f, { domain: [0, 60] }),
												r.a.createElement(le.a, {
													type: 'monotone',
													dataKey: 'uv',
													barSize: 30,
													fill: '#8884d8',
													label: fe,
												})
											)
										),
										r.a.createElement(me, null)
									);
								},
							},
						]),
						t
					);
				})(n.PureComponent),
				fe = function(e) {
					e.payload;
					var t = e.x,
						a = e.y,
						n = e.width,
						o = (e.height, e.value);
					return o > 0
						? r.a.createElement(
								'text',
								{
									x: t + n / 2,
									y: a,
									fill: '#666',
									textAnchor: 'middle',
									dy: -6,
								},
								o
						  )
						: null;
				},
				pe = Object(c.b)(function(e) {
					return { tasks: e.tasks };
				})(ge);
			function de(e) {
				return r.a.createElement(
					x.a,
					Object.assign(
						{
							component: 'a',
							onClick: function(e) {
								e.preventDefault();
							},
						},
						e
					)
				);
			}
			var ve = Object(C.a)(function(e) {
				return {
					root: { flexGrow: 1, backgroundColor: e.palette.background.paper },
				};
			});
			function Ee() {
				var e = ve(),
					t = r.a.useState(0),
					a = Object(N.a)(t, 2),
					n = a[0],
					o = a[1];
				return r.a.createElement(
					'div',
					{ className: ''.concat(e.root, ' w-100') },
					r.a.createElement(
						w.a,
						{ position: 'static' },
						r.a.createElement(
							D.a,
							{
								variant: 'fullWidth',
								value: n,
								onChange: function(e, t) {
									o(t);
								},
							},
							r.a.createElement(de, { label: 'Tasks Log', href: '/tasks/log' }),
							r.a.createElement(de, {
								label: 'Tasks Chart',
								href: '/tasks/chart',
							})
						)
					),
					0 === n && r.a.createElement(re, null),
					1 === n && r.a.createElement(pe, null)
				);
			}
			a(478);
			var ke = (function(e) {
					function t() {
						var e;
						return (
							Object(s.a)(this, t),
							((e = Object(m.a)(
								this,
								Object(g.a)(t).call(this)
							)).toggleStatusTimer = function(t, a, n) {
								e.setState({ isStartTimer: !e.state.isStartTimer });
								var r = e._getCurrentTime();
								e.state.isStartTimer
									? (a(),
									  e._setItem('isStartTimer', 0),
									  e._setItem(
											'timeSpend',
											e._getItem('timeSpend') + (r - e._getItem('timeStart'))
									  ),
									  e._setItem(
											'timeStop',
											e._getItem('timeStart') + e._getItem('timeSpend')
									  ),
									  '' === e.state.taskName
											? e._toggleDialogTaskNoName(!0)
											: e._addTaskLog(n))
									: (t(),
									  e._setItem('isStartTimer', 1),
									  e._setItem('timeStart', r));
							}),
							(e.handleChangeTaskName = function(t) {
								var a =
									arguments.length > 1 && void 0 !== arguments[1]
										? arguments[1]
										: function() {};
								'Enter' === t.key && '' !== t.target.value
									? e._addTaskLog(a)
									: e.setState({ taskName: t.target.value });
							}),
							(e._addTaskLog = function(t) {
								var a = e.state.taskName,
									n = e._getItem('timeStart'),
									r = e._getItem('timeStop'),
									o = e._getItem('timeSpend');
								o < 1e3 && n && (o = 1e3),
									e.props.setTask({
										taskName: a,
										timeStart: n,
										timeEnd: r,
										timeSpend: o,
									}),
									e.setState({
										taskName: '',
										initialTime: 0,
										isStartTimer: !1,
										isOpenDialogNoName: !1,
									}),
									e._setItem('timeSpend', 0),
									t();
							}),
							(e._toggleDialogTaskNoName = function(t) {
								return e.setState({ isOpenDialogNoName: t });
							}),
							(e._getItem = function(e) {
								return Number(localStorage.getItem(e));
							}),
							(e._setItem = function(e, t) {
								return localStorage.setItem(e, t);
							}),
							(e._getCurrentTime = function() {
								return new Date().getTime();
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
						Object(f.a)(t, e),
						Object(u.a)(t, [
							{
								key: 'componentDidMount',
								value: function() {
									var e = this._getItem('isStartTimer'),
										t = this._getItem('timeSpend');
									e
										? this.setState({
												initialTime:
													this._getCurrentTime() -
													this._getItem('timeStart') +
													t,
												isStartTimer: e,
										  })
										: this.setState({ initialTime: t, isStartTimer: e });
								},
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
										r.a.Fragment,
										null,
										r.a.createElement(
											'div',
											{ className: 'timer__wrapper' },
											r.a.createElement(T, {
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
												p.a,
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
														r.a.createElement(v.a, {
															value: a,
															onChange: e.handleChangeTaskName,
															onKeyDown: function(t) {
																return e.handleChangeTaskName(t, c);
															},
															placeholder: 'Name of your task',
															className: 'timer__input',
														}),
														r.a.createElement(
															d.a,
															{ className: 'timer' },
															r.a.createElement(p.a.Hours, {
																formatValue: function(t) {
																	return e._getFormatValue(t);
																},
															}),
															r.a.createElement(p.a.Minutes, null),
															r.a.createElement(p.a.Seconds, {
																formatValue: function(t) {
																	return e._getFormatValue(t, '');
																},
															})
														),
														r.a.createElement(y, {
															start: n,
															stop: i,
															reset: c,
															isStartTimer: o,
															toggleStatusTimer: e.toggleStatusTimer,
														})
													);
												}
											)
										),
										r.a.createElement(Ee, null)
									);
								},
							},
						]),
						t
					);
				})(r.a.Component),
				be = {
					setTask: B,
					getLocalStorage: function(e) {
						return { type: K, key: e };
					},
					setLocalStorage: function(e, t) {
						return { type: Y, key: e, value: t };
					},
				},
				Se = Object(c.b)(function(e) {
					return { tasks: e.tasks, localStorage: e.localStorage };
				}, be)(ke),
				he = a(40),
				Oe = a(83),
				Te = JSON.parse(localStorage.getItem('tasks')) || [],
				_e = function() {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: Te,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case 'SET_TASK':
							var a = [].concat(Object(Oe.a)(e), [t.payload]);
							return localStorage.setItem('tasks', JSON.stringify(a)), a;
						case 'REMOVE_TASK':
							var n = Object(Oe.a)(e);
							return (
								n.splice(t.index, 1),
								localStorage.setItem('tasks', JSON.stringify(n)),
								n
							);
						case 'RESET_TASKS':
							return [];
						default:
							return e;
					}
				},
				je = a(123),
				ye = {
					isStartTimer: 0,
					timePassed: 0,
					timeStop: null,
					timeStart: null,
				},
				Ne = function() {
					var e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case 'GET_LOCAL_STORAGE_SUCCESS':
							return Object(je.a)({}, t.value.key, t.value.value);
						case 'GET_LOCAL_STORAGE_ERROR':
							return { value: null };
						case 'SET_LOCAL_STORAGE_SUCCESS':
							return Object(je.a)({}, t.value.key, t.value.value);
						case 'SET_LOCAL_STORAGE_ERROR':
							return Object(je.a)({}, t.key, 'error');
						default:
							return e;
					}
				},
				Ce = Object(he.combineReducers)({ tasks: _e, localStorage: Ne }),
				we = a(231),
				De = a(232),
				xe = a(35),
				Re = ie.a.mark(Ae),
				Ie = ie.a.mark(Le);
			function Ae(e) {
				var t, a;
				return ie.a.wrap(
					function(n) {
						for (;;)
							switch ((n.prev = n.next)) {
								case 0:
									return (
										(t = e.key),
										(n.prev = 1),
										(n.next = 4),
										Object(xe.b)(function() {
											return Promise.resolve().then(function() {
												return localStorage.getItem(t);
											});
										})
									);
								case 4:
									return (
										(a = n.sent),
										(n.next = 7),
										Object(xe.c)(W({ key: t, value: a }))
									);
								case 7:
									n.next = 13;
									break;
								case 9:
									return (
										(n.prev = 9),
										(n.t0 = n.catch(1)),
										(n.next = 13),
										Object(xe.c)(P(n.t0))
									);
								case 13:
								case 'end':
									return n.stop();
							}
					},
					Re,
					null,
					[[1, 9]]
				);
			}
			function Le() {
				return ie.a.wrap(function(e) {
					for (;;)
						switch ((e.prev = e.next)) {
							case 0:
								return (e.next = 2), Object(xe.d)(K, Ae);
							case 2:
							case 'end':
								return e.stop();
						}
				}, Ie);
			}
			var Fe = ie.a.mark(Me),
				Ge = ie.a.mark(He);
			function Me(e) {
				var t, a;
				return ie.a.wrap(
					function(n) {
						for (;;)
							switch ((n.prev = n.next)) {
								case 0:
									return (
										(t = e.key),
										(a = e.value),
										(n.prev = 1),
										(n.next = 4),
										Object(xe.b)(function() {
											return Promise.resolve().then(function() {
												return localStorage.setItem(t, a);
											});
										})
									);
								case 4:
									return (n.next = 6), Object(xe.c)(U({ key: t, value: a }));
								case 6:
									n.next = 12;
									break;
								case 8:
									return (
										(n.prev = 8),
										(n.t0 = n.catch(1)),
										(n.next = 12),
										Object(xe.c)(z(n.t0))
									);
								case 12:
								case 'end':
									return n.stop();
							}
					},
					Fe,
					null,
					[[1, 8]]
				);
			}
			function He() {
				return ie.a.wrap(function(e) {
					for (;;)
						switch ((e.prev = e.next)) {
							case 0:
								return (e.next = 2), Object(xe.d)(Y, Me);
							case 2:
							case 'end':
								return e.stop();
						}
				}, Ge);
			}
			var Ve = ie.a.mark(Ke);
			function Ke() {
				return ie.a.wrap(function(e) {
					for (;;)
						switch ((e.prev = e.next)) {
							case 0:
								return (e.next = 2), Object(xe.a)([Le(), He()]);
							case 2:
							case 'end':
								return e.stop();
						}
				}, Ve);
			}
			var Ye = Object(De.a)(),
				Be = Object(he.createStore)(
					Ce,
					Object(we.composeWithDevTools)(Object(he.applyMiddleware)(Ye))
				);
			Ye.run(Ke);
			var Je = Be,
				We = function() {
					return r.a.createElement(
						c.a,
						{ store: Je },
						r.a.createElement(l.a, null, r.a.createElement(Se, null))
					);
				};
			Boolean(
				'localhost' === window.location.hostname ||
					'[::1]' === window.location.hostname ||
					window.location.hostname.match(
						/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
					)
			);
			a(479);
			i.a.render(r.a.createElement(We, null), document.getElementById('root')),
				'serviceWorker' in navigator &&
					navigator.serviceWorker.ready.then(function(e) {
						e.unregister();
					});
		},
	},
	[[263, 1, 2]],
]);
//# sourceMappingURL=main.56ab3ecb.chunk.js.map
