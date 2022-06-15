import { drawCharts} from "./charts";

google.charts.load('current', { 'packages': ['corecharts']});

google.charts.setOnLoadCallback(drawCharts);
