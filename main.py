

import webbrowser
import pyautogui
import os
import time
import math
import numpy as np
import keyboard
from pynput.mouse import Controller, Listener, Button
import threading

file_path = os.path.abspath("Mainpages/pages_v2/Authorization.html")
# file_path = os.path.abspath("Mainpages/pages_v2/Director.html")
webbrowser.open("file://" + file_path)
pyautogui.MINIMUM_DURATION = 0 

def stop_script():
    global is_script_running
    is_script_running = False
    print("Script stopped.")
    exit()
time.sleep(3)


def move_and_click(x, y,num_steps):
    # Начальные координаты мыши
    start_x, start_y = pyautogui.position()

    # Количество шагов для плавного перемещения
    num_steps = num_steps

    # Симуляция плавного перемещения мыши и клика
    for step in range(1, num_steps + 1):
        # Вычисление текущих координат по шагу
        progress = step / num_steps
        acceleration = math.sin(progress * math.pi / 2)  # Ускорение
        deceleration = math.sin((1 - progress) * math.pi / 2)  # Замедление
        current_x = start_x + (x - start_x) * acceleration
        current_y = start_y + (y - start_y) * acceleration
        
        # Перемещение мыши
        pyautogui.moveTo(current_x, current_y)
        time.sleep(0.01 * deceleration)  # Замедление для более плавного завершения
        if keyboard.is_pressed('esc'):
            stop_script()
        # Пауза для создания плавного движения
        # Уменьшите эту паузу для более быстрой анимации
    
    pyautogui.click()
    time.sleep(2)


mouse = Controller()

is_script_running = True

def on_click(x, y, button, pressed):
    pass

screen_resolution = (1920, 1080)
target_resolution = (1920, 1080)
targx = target_resolution[0] / screen_resolution[0]
tatgy =  target_resolution[1] / screen_resolution[1]
# Функция для преобразования абсолютных координат в относительные

def absolute_to_relative_move(x, y):
    relative_x = x * targx
    relative_y = y * tatgy 
    if keyboard.is_pressed('esc'):
            stop_script()
    pyautogui.moveTo(relative_x, relative_y, duration=0.8)
    pyautogui.click()
    time.sleep(1.5)
    
    # return int(relative_x), int(relative_y)


def script_thread(start_x, start_y, end_x, end_y, num_steps):
    global is_script_running
    
    # Зажимаем кнопку мыши на начальных координатах
    mouse.press(Button.left)
    # Симуляция плавного перемещения мыши
    for step in range(1, num_steps + 1):
        progress = step / num_steps
        acceleration = math.sin(progress * math.pi / 2)  # Ускорение
        deceleration = math.sin((1 - progress) * math.pi / 2)  # Замедление
        current_x = start_x + (end_x - start_x) * acceleration
        current_y = start_y + (end_y - start_y) * acceleration

        # Перемещение мыши
        mouse.position = (current_x, current_y)

        # Пауза для создания плавного движения
        time.sleep(0.01 * deceleration)  # Замедление для более плавного завершения
    
    # Отпускаем кнопку мыши
    mouse.release(Button.left)

    # Ожидаем, пока не будет нажата определенная клавиша для остановки скрипта
    while is_script_running:
        if keyboard.is_pressed('esc'):
            stop_script()

# Запускаем скрипт в отдельном потоке

# def bezier_curve(t, p0, p1, p2):
#     # Формула кривой Безье
#     return (1 - t) ** 2 * p0 + 2 * (1 - t) * t * p1 + t ** 2 * p2

# def move_and_click_with_bezier(x, y, num_points):
#     start_x, start_y = pyautogui.position()
#     control_x = (start_x + x) // 2  # Выберите координату X для контрольной точки
#     control_y = (start_y + y) // 2  # Выберите координату Y для контрольной точки
    
#     # Создание массива значений t для интерполяции
#     t_values = np.linspace(0, 1, num_points)
    
#     for t in t_values:
#         # Вычисление координат на кривой Безье
#         current_x = int(bezier_curve(t, start_x, control_x, x))
#         current_y = int(bezier_curve(t, start_y, control_y, y))
        
#         pyautogui.moveTo(current_x, current_y)
#         time.sleep(0)
    
#     pyautogui.click()

# pyautogui.moveTo(100, 100, duration=0.5)

# # Вызов функции с использованием кривой Безье
# move_and_click_with_bezier(972, 555, 100)

# absolute_to_relative_move(972,555)

# //Авторизация
print(pyautogui.size())

absolute_to_relative_move(972, 555)
keyboard.write("login", delay=0.1)
absolute_to_relative_move(982, 627)
keyboard.write("password", delay=0.1)
absolute_to_relative_move(982, 701)

#Виджет Ежедневник

absolute_to_relative_move(659,325)
absolute_to_relative_move(659,383)
#Карта завода
pyautogui.scroll(-360)

absolute_to_relative_move(940,472)
absolute_to_relative_move(1190,400)
absolute_to_relative_move(1387,594)
#Список сотрудников
absolute_to_relative_move(501,375)
absolute_to_relative_move(477,477)
absolute_to_relative_move(513,561)
absolute_to_relative_move(1434,662)
keyboard.write("Жду вас у себя", delay=0.1)
absolute_to_relative_move(1634,660)
absolute_to_relative_move(477,477)
absolute_to_relative_move(501,375)
absolute_to_relative_move(359,479)
absolute_to_relative_move(424,684)
absolute_to_relative_move(423,777)
absolute_to_relative_move(1434,662)
keyboard.write("Подойдите ко мне сейчас!", delay=0.1)
absolute_to_relative_move(1634,660)
absolute_to_relative_move(1051,426)
#Закрыть чат и виджет сотрудников
absolute_to_relative_move(1685,158)
absolute_to_relative_move(871,158)
#перетаскиваем график
absolute_to_relative_move(363,856)
pyautogui.moveTo(363,856, duration=1)
pyautogui.mouseDown()
pyautogui.moveTo(363,162,duration=1)
pyautogui.mouseUp() 
absolute_to_relative_move(204,374)
absolute_to_relative_move(292,373)
absolute_to_relative_move(188,203)
absolute_to_relative_move(213,343)
absolute_to_relative_move(622,158)

#Открываем виджет Планирования
pyautogui.scroll(360)
absolute_to_relative_move(210,155)
absolute_to_relative_move(196,246)
absolute_to_relative_move(176,626)
pyautogui.scroll(-360)
absolute_to_relative_move(176,451)
absolute_to_relative_move(177,680)

# thread1 = threading.Thread(target=script_thread, args=(1736, 637, 600, 600, 60))
# thread1.start()
# move_and_click(734, 596, 10)
# Ожидаем, пока не будет нажата определенная клавиша для остановки скрипта
while is_script_running:
    if keyboard.is_pressed('esc'):
        stop_script()









# time.sleep(2)
# pyautogui.click()
# move_and_click(800, 270)
# move_and_click(800, 350)
# move_and_click(800, 375)