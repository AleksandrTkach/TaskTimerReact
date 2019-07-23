(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    276: function(e, t, a) {
      e.exports = a(495);
    },
    285: function(e, t, a) {},
    313: function(e, t, a) {},
    491: function(e, t, a) {},
    492: function(e, t, a) {},
    493: function(e, t, a) {},
    494: function(e, t, a) {},
    495: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        r = a.n(n),
        c = a(20),
        o = a.n(c),
        i = a(22),
        l = a(21),
        s = a(24),
        u = a(23),
        m = a(25),
        f = a(31),
        p = a(48),
        d = a(60),
        b = a(550),
        h = a(232),
        g = a.n(h),
        E = a(233),
        v = a.n(E),
        k = a(133),
        O = a.n(k),
        j = a(66),
        S = a.n(j),
        T = a(533),
        y = a(534),
        N = a(535),
        x = a(536),
        C = a(537),
        w = a(38),
        _ = 10,
        D = 15,
        R = { MIN: 10, MAX: 90 },
        H = 6e4,
        I = '/',
        M = '/tasks/',
        A = '/tasks/log',
        F = '/tasks/chart',
        B = a(53),
        K = a.n(B),
        L = function(e) {
          return !(arguments.length > 1 && void 0 !== arguments[1]) ||
            arguments[1]
            ? Number(localStorage.getItem(e))
            : JSON.parse(localStorage.getItem(e));
        },
        V = function(e, t) {
          return !(arguments.length > 2 && void 0 !== arguments[2]) ||
            arguments[2]
            ? localStorage.setItem(e, t)
            : localStorage.setItem(e, JSON.stringify(t));
        },
        U = function() {
          return new Date().getTime();
        },
        W = function(e, t) {
          return t
            ? K.a.utc(+e).format('HH:mm:ss')
            : K()(+e).format('HH:mm:ss');
        },
        J = function() {
          for (
            var e = new Date(),
              t = X(_, D),
              a = Number(
                new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime()
              ),
              n = [],
              r = 0;
            r < t;
            r++
          ) {
            var c = Y(a);
            n.push({
              taskName: 'Task '.concat(r),
              timeStart: a,
              timeEnd: c,
              timeSpend: c - a,
            }),
              (a = Y(c));
          }
          return n;
        };
      function Y(e) {
        return e + X(R.MIN, R.MAX) * H;
      }
      function X(e, t) {
        return Math.round(Math.random() * (t - e) + e);
      }
      var z = function(e) {
          return e.map(function(e) {
            return {
              startHour: Number(K()(e.timeStart).format('H')),
              startMin: Number(K()(e.timeStart).format('m')),
              startSec: Number(K()(e.timeStart).format('s')),
              endHour: Number(K()(e.timeEnd).format('H')),
              endMin: Number(K()(e.timeEnd).format('m')),
              endSec: Number(K()(e.timeEnd).format('s')),
            };
          });
        },
        G = function(e, t) {
          var a = Object(w.a)(e),
            n = !0,
            r = !1,
            c = void 0;
          try {
            for (
              var o, i = t[Symbol.iterator]();
              !(n = (o = i.next()).done);
              n = !0
            ) {
              var l = o.value,
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
            (r = !0), (c = m);
          } finally {
            try {
              n || null == i.return || i.return();
            } finally {
              if (r) throw c;
            }
          }
          return a;
        },
        P = function() {
          for (var e = [], t = 0; t < 24; t++) e.push({ name: t, uv: 0 });
          return e;
        },
        $ = function(e, t) {
          return { type: e, payload: t };
        },
        q =
          (a(285),
          (function(e) {
            function t() {
              return (
                Object(i.a)(this, t),
                Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(m.a)(t, e),
              Object(l.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.tasks[e.match.params.id];
                    return r.a.createElement(
                      'div',
                      { className: 'task-info__wrapper' },
                      r.a.createElement(
                        T.a,
                        { className: 'task-info__card' },
                        r.a.createElement(y.a, {
                          title: ''.concat(t.taskName),
                        }),
                        r.a.createElement(
                          N.a,
                          null,
                          r.a.createElement(
                            g.a,
                            null,
                            r.a.createElement(
                              v.a,
                              null,
                              r.a.createElement(
                                O.a,
                                null,
                                r.a.createElement(
                                  S.a,
                                  { align: 'left' },
                                  ' Time start: '
                                ),
                                r.a.createElement(
                                  S.a,
                                  { align: 'left' },
                                  W(t.timeStart)
                                )
                              ),
                              r.a.createElement(
                                O.a,
                                null,
                                r.a.createElement(
                                  S.a,
                                  { align: 'left' },
                                  ' Time end: '
                                ),
                                r.a.createElement(
                                  S.a,
                                  { align: 'left' },
                                  W(t.timeEnd)
                                )
                              ),
                              r.a.createElement(
                                O.a,
                                null,
                                r.a.createElement(
                                  S.a,
                                  { align: 'left' },
                                  ' Time spend: '
                                ),
                                r.a.createElement(
                                  S.a,
                                  { align: 'left' },
                                  W(t.timeSpend, !0)
                                )
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          x.a,
                          { style: { justifyContent: 'flex-end' } },
                          r.a.createElement(
                            p.b,
                            { to: A },
                            r.a.createElement(C.a, { size: 'small' }, ' Back ')
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(r.a.Component)),
        Q = Object(f.b)(function(e) {
          return { tasks: e.tasks };
        })(Object(d.f)(q)),
        Z = a(26),
        ee = a.n(Z),
        te = a(123),
        ae = a(97),
        ne = a(249),
        re = a(551),
        ce = a(126),
        oe = a.n(ce),
        ie = 'SET_TASK',
        le = 'REMOVE_TASK',
        se = function(e) {
          return $(ie, e);
        },
        ue = L('tasks', !1) || [],
        me = a(554),
        fe = a(541),
        pe = a(539),
        de = a(540),
        be = a(538),
        he = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.dialogTitle,
                    a = void 0 === t ? '' : t,
                    n = e.dialogContentText,
                    c = e.isOpenDialog,
                    o = e.clickDialogClose,
                    i = e.clickDialogSuccess,
                    l = e.btnSuccessText,
                    s = void 0 === l ? 'Close' : l,
                    u = e.btnRejectText,
                    m = void 0 === u ? null : u;
                  return r.a.createElement(
                    me.a,
                    {
                      fullWidth: !0,
                      maxWidth: 'sm',
                      open: c,
                      onClose: o,
                      'aria-labelledby': 'form-dialog-title',
                    },
                    r.a.createElement(
                      be.a,
                      {
                        id: 'form-dialog-title',
                        style: { textAlign: 'center' },
                      },
                      a
                    ),
                    r.a.createElement(
                      pe.a,
                      null,
                      r.a.createElement(de.a, null, n),
                      this.props.children
                    ),
                    r.a.createElement(
                      fe.a,
                      {
                        style: {
                          justifyContent:
                            null === m ? 'flex-end' : 'space-between',
                        },
                      },
                      null !== m
                        ? r.a.createElement(
                            C.a,
                            { onClick: o, color: 'primary' },
                            m
                          )
                        : null,
                      r.a.createElement(
                        C.a,
                        { onClick: i, color: 'primary' },
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
        ge =
          (a(313),
          (function(e) {
            function t() {
              var e;
              return (
                Object(i.a)(this, t),
                ((e = Object(s.a)(
                  this,
                  Object(u.a)(t).call(this)
                )).toggleStatusTimer = function(t, a, n) {
                  e.state.isStartTimer
                    ? '' === e.state.taskName
                      ? e._toggleDialogTaskNoName(!0)
                      : (a(), e._addTaskLog(n))
                    : (t(),
                      V('isStartTimer', 1),
                      V('timeStart', U()),
                      e.setState({ isStartTimer: !0 }));
                }),
                (e.handleChangeTaskName = function(t) {
                  e.setState({ taskName: t.target.value });
                }),
                (e._addTaskLog = function(t) {
                  var a = e.state.taskName,
                    n = L('timeStart'),
                    r = U() - n,
                    c = n + r;
                  r < 1e3 && n && (r = 1e3),
                    e.props.setTask({
                      taskName: a,
                      timeStart: n,
                      timeEnd: c,
                      timeSpend: r,
                    }),
                    e.setState({
                      taskName: '',
                      initialTime: 0,
                      isStartTimer: !1,
                      isOpenDialogNoName: !1,
                    }),
                    V('timeSpend', 0),
                    V('isStartTimer', 0),
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
              Object(m.a)(t, e),
              Object(l.a)(t, [
                {
                  key: 'componentDidMount',
                  value: (function() {
                    var e = Object(te.a)(
                      ee.a.mark(function e() {
                        var t, a, n;
                        return ee.a.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = L('isStartTimer')),
                                    (a = L('timeSpend')),
                                    (n = t ? U() - L('timeStart') + a : a),
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
                      c = t.isStartTimer,
                      o = t.isOpenDialogNoName;
                    return r.a.createElement(
                      'div',
                      { className: 'timer__wrapper' },
                      r.a.createElement(he, {
                        isOpenDialog: o,
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
                        ae.a,
                        {
                          initialTime: n,
                          startImmediately: c,
                          formatValue: function(t) {
                            return e._getFormatValue(t);
                          },
                        },
                        function(t) {
                          var n = t.start,
                            o = t.stop,
                            i = t.reset;
                          return r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(re.a, {
                              value: a,
                              onChange: e.handleChangeTaskName,
                              placeholder: 'Name of your task',
                              className: 'timer__input',
                            }),
                            r.a.createElement(
                              ne.a,
                              { className: 'timer' },
                              r.a.createElement(ae.a.Hours, {
                                formatValue: function(t) {
                                  return e._getFormatValue(t);
                                },
                              }),
                              r.a.createElement(ae.a.Minutes, null),
                              r.a.createElement(ae.a.Seconds, {
                                formatValue: function(t) {
                                  return e._getFormatValue(t, '');
                                },
                              })
                            ),
                            r.a.createElement(
                              oe.a,
                              {
                                variant: 'contained',
                                className: 'btn',
                                onClick: function() {
                                  return e.toggleStatusTimer(n, o, i);
                                },
                              },
                              c ? 'Stop' : 'Start'
                            )
                          );
                        }
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(r.a.Component)),
        Ee = { setTask: se },
        ve = Object(f.b)(function(e) {
          return { tasks: e.tasks };
        }, Ee)(ge),
        ke = a(548),
        Oe = a(552),
        je = a(549),
        Se = a(544),
        Te = a(545),
        ye = a(547),
        Ne = a(543),
        xe = a(546),
        Ce = a(542),
        we = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    Ce.a,
                    null,
                    r.a.createElement(
                      Ne.a,
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
        _e = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.styleButton,
                    a = e.index;
                  return r.a.createElement(
                    p.b,
                    { to: ''.concat(M).concat(a) },
                    r.a.createElement(
                      C.a,
                      { variant: 'contained', style: t },
                      'Info'
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component),
        De = (function(e) {
          function t() {
            var e;
            return (
              Object(i.a)(this, t),
              ((e = Object(s.a)(
                this,
                Object(u.a)(t).call(this)
              ))._toggleDialogRemove = function(t) {
                return e.setState({ isOpenDialogRemove: t });
              }),
              (e.state = { isOpenDialogRemove: !1 }),
              e
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.state.isOpenDialogRemove,
                    a = this.props,
                    n = a.styleButton,
                    c = a.taskIndex,
                    o = a.removeTask;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      C.a,
                      {
                        variant: 'contained',
                        style: n,
                        onClick: function() {
                          return e._toggleDialogRemove(!0);
                        },
                      },
                      'Delete'
                    ),
                    r.a.createElement(he, {
                      isOpenDialog: t,
                      clickDialogClose: function() {
                        return e._toggleDialogRemove(!1);
                      },
                      clickDialogSuccess: function() {
                        e._toggleDialogRemove(!1), o(c);
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
        Re = {
          removeTask: function(e) {
            return $(le, e);
          },
        },
        He = Object(f.b)(null, Re)(De),
        Ie = { background: 'white', borderRadius: 0 },
        Me = (function(e) {
          function t() {
            var e, a;
            Object(i.a)(this, t);
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            return (
              ((a = Object(s.a)(
                this,
                (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
              ))._getTimeEnd = function(e) {
                return W(e.timeStart) === W(e.timeEnd)
                  ? W(e.timeEnd + 1e3)
                  : W(e.timeEnd);
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this.props.tasks.map(function(t, a) {
                      return r.a.createElement(
                        Ce.a,
                        { key: 'task-body-'.concat(a) },
                        r.a.createElement(
                          Ne.a,
                          { component: 'th', scope: 'row' },
                          ++a
                        ),
                        r.a.createElement(Ne.a, { align: 'left' }, t.taskName),
                        r.a.createElement(
                          Ne.a,
                          { align: 'center' },
                          W(t.timeStart)
                        ),
                        r.a.createElement(
                          Ne.a,
                          { align: 'center' },
                          e._getTimeEnd(t)
                        ),
                        r.a.createElement(
                          Ne.a,
                          { align: 'center' },
                          W(t.timeSpend, !0)
                        ),
                        r.a.createElement(
                          Ne.a,
                          { align: 'center' },
                          r.a.createElement(_e, {
                            index: --a,
                            task: t,
                            styleButton: Ie,
                            getFormatTime: W,
                          })
                        ),
                        r.a.createElement(
                          Ne.a,
                          { align: 'center' },
                          r.a.createElement(He, {
                            taskIndex: a,
                            styleButton: Ie,
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
        Ae = Object(f.b)(function(e) {
          return { tasks: e.tasks };
        })(Me),
        Fe = Object(Se.a)(function() {
          return {
            root: { width: '100%', overflowX: 'auto', borderRadius: 0 },
            table: { minWidth: 650 },
          };
        }),
        Be = [
          '\u2116',
          'Tasks',
          'Time start',
          'Time end',
          'Time Spend',
          'Info',
          'Delete',
        ],
        Ke = Object(f.b)(function(e) {
          return { tasks: e.tasks };
        })(function(e) {
          var t = e.tasks,
            a = Fe();
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              ne.a,
              { className: a.root },
              r.a.createElement(
                Te.a,
                { className: a.table },
                r.a.createElement(
                  xe.a,
                  null,
                  r.a.createElement(
                    Ce.a,
                    null,
                    Be.map(function(e, t) {
                      return r.a.createElement(
                        Ne.a,
                        { key: 'task-header-'.concat(t), align: 'center' },
                        e
                      );
                    })
                  )
                ),
                r.a.createElement(
                  ye.a,
                  null,
                  t.length
                    ? r.a.createElement(Ae, null)
                    : r.a.createElement(we, null)
                )
              )
            )
          );
        }),
        Le = a(67),
        Ve = 'BUILD_CHART',
        Ue = function() {
          return $(Ve);
        },
        We = function() {
          return $('BUILD_CHART_RESET');
        },
        Je = function(e) {
          return $('BUILD_CHART_SUCCESS', e);
        },
        Ye = P(),
        Xe = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Ye,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case 'BUILD_CHART_SUCCESS':
              return t.payload;
            case 'BUILD_CHART_RESET':
              return P();
            default:
              return e;
          }
        },
        ze =
          (a(491),
          (function(e) {
            function t() {
              var e, a;
              Object(i.a)(this, t);
              for (
                var n = arguments.length, r = new Array(n), c = 0;
                c < n;
                c++
              )
                r[c] = arguments[c];
              return (
                ((a = Object(s.a)(
                  this,
                  (e = Object(u.a)(t)).call.apply(e, [this].concat(r))
                ))._generate = Object(te.a)(
                  ee.a.mark(function e() {
                    var t;
                    return ee.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), a.props.resetTasks();
                          case 2:
                            return (e.next = 4), J();
                          case 4:
                            return (
                              (t = e.sent),
                              V('tasks', t, !1),
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
              Object(m.a)(t, e),
              Object(l.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this;
                    return r.a.createElement(
                      oe.a,
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
        Ge = {
          setTask: se,
          refreshTasks: function(e) {
            return $('REFRESH_TASKS', e);
          },
          resetTasks: function(e) {
            return $('RESET_TASKS', e);
          },
          buildChart: Ue,
        },
        Pe = Object(f.b)(null, Ge)(ze),
        $e = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
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
                      Le.d,
                      { width: '100%', height: 300 },
                      r.a.createElement(
                        Le.b,
                        { data: this.props.chartColumns },
                        r.a.createElement(Le.c, { stroke: '#ccc' }),
                        r.a.createElement(Le.e, { dataKey: 'name' }),
                        r.a.createElement(Le.f, { domain: [0, 60] }),
                        r.a.createElement(Le.a, {
                          type: 'monotone',
                          dataKey: 'uv',
                          barSize: 30,
                          fill: '#8884d8',
                          label: qe,
                        })
                      )
                    ),
                    r.a.createElement(Pe, null)
                  );
                },
              },
            ]),
            t
          );
        })(n.PureComponent),
        qe = function(e) {
          e.payload;
          var t = e.x,
            a = e.y,
            n = e.width,
            c = (e.height, e.value);
          if (c > 0) {
            var o = 16,
              i = '#fff';
            return (
              c <= 5 && ((o = -6), (i = '#000')),
              r.a.createElement(
                'text',
                { x: t + n / 2, y: a, fill: i, textAnchor: 'middle', dy: o },
                c
              )
            );
          }
          return null;
        },
        Qe = { buildChart: Ue },
        Ze = Object(f.b)(function(e) {
          return { chartColumns: e.chartColumns };
        }, Qe)($e),
        et =
          (a(492),
          (function(e) {
            function t() {
              var e;
              return (
                Object(i.a)(this, t),
                ((e = Object(s.a)(
                  this,
                  Object(u.a)(t).call(this)
                )).handleChange = function(t, a) {
                  e.setState({ activeTabIndex: a });
                }),
                (e.state = { activeTabIndex: 0 }),
                e
              );
            }
            return (
              Object(m.a)(t, e),
              Object(l.a)(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.setState({
                      activeTabIndex:
                        this.props.location.pathname === F ? 1 : 0,
                    });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.state.activeTabIndex;
                    return r.a.createElement(
                      'div',
                      { className: 'tabs__wrapper' },
                      r.a.createElement(
                        ke.a,
                        { position: 'static' },
                        r.a.createElement(
                          Oe.a,
                          {
                            variant: 'fullWidth',
                            value: e,
                            onChange: this.handleChange,
                          },
                          r.a.createElement(je.a, {
                            label: 'Task Log',
                            component: p.b,
                            to: A,
                          }),
                          r.a.createElement(je.a, {
                            label: 'Task Chart',
                            component: p.b,
                            to: F,
                          })
                        )
                      ),
                      r.a.createElement(
                        d.c,
                        null,
                        r.a.createElement(d.a, {
                          exact: !0,
                          path: [A, I],
                          component: Ke,
                        }),
                        r.a.createElement(d.a, {
                          exact: !0,
                          path: F,
                          component: Ze,
                        })
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(r.a.Component)),
        tt = Object(d.f)(et),
        at =
          (a(493),
          function() {
            return r.a.createElement(
              'div',
              { className: 'not-found__wrapper' },
              r.a.createElement('div', null, ' 404 ')
            );
          }),
        nt = a(43),
        rt = Object(nt.combineReducers)({
          tasks: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ue,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ie:
                return [].concat(Object(w.a)(e), [t.payload]);
              case le:
                return [].concat(
                  Object(w.a)(e.slice(0, t.payload)),
                  Object(w.a)(e.slice(t.payload + 1))
                );
              case 'REFRESH_TASKS':
                return t.payload;
              case 'RESET_TASKS':
                return [];
              default:
                return e;
            }
          },
          chartColumns: Xe,
        }),
        ct = a(247),
        ot = a(248),
        it = a(34),
        lt = ee.a.mark(ut),
        st = ee.a.mark(mt);
      function ut() {
        var e, t, a, n, r;
        return ee.a.wrap(
          function(c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (c.prev = 0), (c.next = 3), Object(it.c)(We());
                case 3:
                  return (c.next = 5), Object(it.d)();
                case 5:
                  return (
                    (e = c.sent),
                    (t = e.tasks),
                    (a = e.chartColumns),
                    (c.next = 10),
                    Object(it.b)(function() {
                      return z(t);
                    })
                  );
                case 10:
                  return (
                    (n = c.sent),
                    (c.next = 13),
                    Object(it.b)(function() {
                      return G(a, n);
                    })
                  );
                case 13:
                  return (r = c.sent), (c.next = 16), Object(it.c)(Je(r));
                case 16:
                  c.next = 21;
                  break;
                case 18:
                  (c.prev = 18),
                    (c.t0 = c.catch(0)),
                    console.log('error: ', c.t0);
                case 21:
                case 'end':
                  return c.stop();
              }
          },
          lt,
          null,
          [[0, 18]]
        );
      }
      function mt() {
        return ee.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(it.e)(Ve, ut);
              case 2:
              case 'end':
                return e.stop();
            }
        }, st);
      }
      var ft = ee.a.mark(bt),
        pt = ee.a.mark(ht),
        dt = ee.a.mark(gt);
      function bt() {
        var e, t;
        return ee.a.wrap(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.prev = 0), (a.next = 3), Object(it.d)();
                case 3:
                  (e = a.sent),
                    (t = e.tasks),
                    V('tasks', [].concat(Object(w.a)(t), [$.payload]), !1),
                    (a.next = 11);
                  break;
                case 8:
                  (a.prev = 8),
                    (a.t0 = a.catch(0)),
                    console.log('error: ', a.t0);
                case 11:
                case 'end':
                  return a.stop();
              }
          },
          ft,
          null,
          [[0, 8]]
        );
      }
      function ht() {
        var e, t;
        return ee.a.wrap(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.prev = 0), (a.next = 3), Object(it.d)();
                case 3:
                  (e = a.sent),
                    (t = e.tasks),
                    V(
                      'tasks',
                      [].concat(
                        Object(w.a)(t.slice(0, $.payload)),
                        Object(w.a)(t.slice($.payload + 1))
                      ),
                      !1
                    ),
                    (a.next = 11);
                  break;
                case 8:
                  (a.prev = 8),
                    (a.t0 = a.catch(0)),
                    console.log('error: ', a.t0);
                case 11:
                case 'end':
                  return a.stop();
              }
          },
          pt,
          null,
          [[0, 8]]
        );
      }
      function gt() {
        return ee.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(it.e)(ie, bt);
              case 2:
                return (e.next = 4), Object(it.e)(le, ht);
              case 4:
              case 'end':
                return e.stop();
            }
        }, dt);
      }
      var Et = ee.a.mark(vt);
      function vt() {
        return ee.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(it.a)([mt(), gt()]);
              case 2:
              case 'end':
                return e.stop();
            }
        }, Et);
      }
      var kt = Object(ot.a)(),
        Ot = Object(nt.createStore)(
          rt,
          Object(ct.composeWithDevTools)(Object(nt.applyMiddleware)(kt))
        );
      kt.run(vt);
      var jt = Ot,
        St = (function(e) {
          function t() {
            return (
              Object(i.a)(this, t),
              Object(s.a)(this, Object(u.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function() {
                  return r.a.createElement(
                    f.a,
                    { store: jt },
                    r.a.createElement(
                      b.a,
                      null,
                      r.a.createElement(
                        p.a,
                        null,
                        r.a.createElement(
                          d.c,
                          null,
                          r.a.createElement(
                            d.a,
                            { path: [I, A, F], exact: !0 },
                            r.a.createElement(ve, null),
                            r.a.createElement(tt, null)
                          ),
                          r.a.createElement(
                            d.a,
                            { path: ''.concat(M, ':id') },
                            r.a.createElement(Q, null)
                          ),
                          r.a.createElement(d.a, { component: at })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component);
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a(494);
      o.a.render(r.a.createElement(St, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
  },
  [[276, 1, 2]],
]);
//# sourceMappingURL=main.2569f486.chunk.js.map
