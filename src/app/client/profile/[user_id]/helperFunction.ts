export function isOpen(openingHours: string): boolean {

    // 分割时间范围
    const [start, end] = openingHours.split("-");

    // 分割开始时间
    const [startHour, startMinute] = start.split(":");

    // 分割结束时间
    const [endHour, endMinute] = end.split(":"); // 修复这里的错误，应该是使用 `end` 而不是 `start`

    // 获取当前时间
    const now = new Date();
    const nowHours = now.getHours();
    const nowMin = now.getMinutes();

    // 输出调试信息
    console.log(`Opening hours: ${openingHours}`);
    console.log(`Start time: ${startHour}:${startMinute}`);
    console.log(`End time: ${endHour}:${endMinute}`);
    console.log(`Current time: ${nowHours}:${nowMin}`);

    // 返回是否在营业时间内
    const isAfterStart = nowHours * 60 + nowMin >= parseInt(startHour) * 60 + parseInt(startMinute);
    const isBeforeEnd = nowHours * 60 + nowMin <= parseInt(endHour) * 60 + parseInt(endMinute);

    const isOpenNow = isAfterStart && isBeforeEnd;

    console.log(`Is open now: ${isOpenNow}`);

    return isOpenNow;

}