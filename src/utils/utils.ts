export const uuid = () => {
    const s:string[] = [];
    const hexDigits = "0123456789abcdef";
    for (var i = 0; i < 32; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    const uuid = s.join("");
    return uuid;
}

// 锚点拖动方法
// author rengensheng
// 2021-09-12
export const disposeMouseMove = (type: any, store: any, props: any): any => {
    const functions:any = {
      'left-top': function(position: any, mousePosition: any, currentPosition: any) {
        const moveX = currentPosition.x - mousePosition.x
        const moveY = currentPosition.y - mousePosition.y
        mousePosition.x = currentPosition.x
        mousePosition.y = currentPosition.y
        if (moveX < 0 && (position.width - moveX) < 50) {
          // 超出最小宽度
          return
        } else {
          position.width = position.width - moveX
          position.left = position.left + moveX
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'left',
            value: position.left,
          })
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'width',
            value: position.width,
          })
        }
        if (moveY < 0 && (position.height - moveY) < 50) {
          // 超出最小高度
          return
        } else {
          position.height = position.height - moveY
          position.top = position.top + moveY
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'top',
            value: position.top,
          })
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'height',
            value: position.height,
          })
        }
      },
      'top': function(position: any, mousePosition: any, currentPosition: any) {
        const moveY = currentPosition.y - mousePosition.y
        mousePosition.y = currentPosition.y
        if (moveY < 0 && (position.height - moveY) < 50) {
          // 超出最小高度
          return
        } else {
          position.height = position.height - moveY
          position.top = position.top + moveY
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'top',
            value: position.top,
          })
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'height',
            value: position.height,
          })
        }
      },
      'left': function(position: any, mousePosition: any, currentPosition: any) {
        const moveX = currentPosition.x - mousePosition.x
        mousePosition.x = currentPosition.x
        if (moveX < 0 && (position.width + moveX) < 50) {
          // 超出最小宽度
          return
        } else {
          position.width = position.width - moveX
          position.left = position.left + moveX
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'left',
            value: position.left,
          })
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'width',
            value: position.width,
          })
        }
      },
      'right-bottom': function(position: any, mousePosition: any, currentPosition: any) {
        const moveX = currentPosition.x - mousePosition.x
        const moveY = currentPosition.y - mousePosition.y
        mousePosition.x = currentPosition.x
        mousePosition.y = currentPosition.y
        if (moveX < 0 && (position.width + moveX) < 50) {
          // 超出最小宽度
          return
        } else {
          position.width = position.width + moveX
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'width',
            value: position.width,
          })
        }
        if (moveY < 0 && (position.height + moveY) < 50) {
          // 超出最小高度
          return
        } else {
          position.height = position.height + moveY
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'height',
            value: position.height,
          })
        }
      },
      'right': function(position: any, mousePosition: any, currentPosition: any) {
        const moveX = currentPosition.x - mousePosition.x
        mousePosition.x = currentPosition.x
        if (moveX < 0 && (position.width + moveX) < 50) {
          // 超出最小宽度
          return
        } else {
          position.width = position.width + moveX
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'width',
            value: position.width,
          })
        }
      },
      'bottom': function(position: any, mousePosition: any, currentPosition: any) {
        const moveY = currentPosition.y - mousePosition.y
        mousePosition.y = currentPosition.y
        if (moveY < 0 && (position.height + moveY) < 50) {
          // 超出最小高度
          return
        } else {
          position.height = position.height + moveY
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'height',
            value: position.height,
          })
        }
      },
      'right-top': function(position: any, mousePosition: any, currentPosition: any) {
        const moveX = currentPosition.x - mousePosition.x
        mousePosition.x = currentPosition.x
        if (moveX < 0 && (position.width + moveX) < 50) {
          // 超出最小宽度
          return
        } else {
          position.width = position.width + moveX
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'width',
            value: position.width,
          })
        }
        const moveY = currentPosition.y - mousePosition.y
        mousePosition.y = currentPosition.y
        if (moveY < 0 && (position.height - moveY) < 50) {
          // 超出最小高度
          return
        } else {
          position.height = position.height - moveY
          position.top = position.top + moveY
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'top',
            value: position.top,
          })
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'height',
            value: position.height,
          })
        }
      },
      'left-bottom': function(position: any, mousePosition: any, currentPosition: any) {
        const moveX = currentPosition.x - mousePosition.x
        mousePosition.x = currentPosition.x
        if (moveX < 0 && (position.width + moveX) < 50) {
          // 超出最小宽度
          return
        } else {
          position.width = position.width - moveX
          position.left = position.left + moveX
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'left',
            value: position.left,
          })
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'width',
            value: position.width,
          })
        }
        const moveY = currentPosition.y - mousePosition.y
        mousePosition.y = currentPosition.y
        if (moveY < 0 && (position.height + moveY) < 50) {
          // 超出最小高度
          return
        } else {
          position.height = position.height + moveY
          store.commit('SET_WIDGET_CONFIG', {
            uuid: props.widget.uuid,
            propsName: 'height',
            value: position.height,
          })
        }
      },
    }
    return functions[type]
  }